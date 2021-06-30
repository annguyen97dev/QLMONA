import React, { useEffect, useState } from "react";
import { providers, signIn, csrfToken, getProviders } from "next-auth/client";
import { useRouter } from "next/router";
import LoginForm from "~/components/LoginForm";

export default function SignIn({ providers, csrfToken }) {
  const router = useRouter();
  const [haveError, setHaveError] = useState("");

  useEffect(() => {
    if (router.query?.error) {
      const { error } = router.query;

      const erData = JSON.parse(error.toString().split("Error:")[0]);

      console.log("Erdata: ", erData);

      switch (erData.status) {
        case 200:
          console.log("Đăng nhập thành công");
          break;
        case 400:
          console.log("Tên đăng nhập hoặc mật khẩu không đúng");
          setHaveError(erData.message);
          break;
        case 404:
          console.log("Không truy cập được API");

          break;
        case 401:
          console.log("Dữ liệu không hợp lệ");
          break;
        default:
          console.log(JSON.stringify(erData));
          break;
      }
      // router.replace("/", undefined, { shallow: true });
    }
    return () => {};
  }, []);
  const _Submit = (data) => {
    signIn("credentials-signin", {
      ...data,
      callbackUrl: router.query?.callbackUrl ?? "/",
    });
  };
  return (
    <>
      {Object.values(providers).map((provider: { id; name }) => {
        switch (provider.id) {
          case "credentials-signin":
            return (
              <div key={provider.name}>
                <LoginForm
                  key={provider.name}
                  onSubmit={_Submit}
                  // action="/api/auth/callback/credentials-signin"
                  csrfToken={csrfToken}
                  error={haveError}
                />
                {/* <form
                  method="post"
                  action="/api/auth/callback/credentials-signin"
                >
                  <input
                    name="csrfToken"
                    type="hidden"
                    defaultValue={csrfToken}
                    // value={csrfToken}
                  />
                  <label>
                    Username
                    <input name="username" type="text" />
                  </label>
                  <label>
                    Password
                    <input name="password" type="password" />
                  </label>
                  <button type="submit">Đăng nhập</button>
                </form> */}
              </div>
            );
          case "email":
            return (
              <div key={provider.name}>
                <form method="post" action="/api/auth/signin/email">
                  <input
                    name="csrfToken"
                    type="hidden"
                    defaultValue={csrfToken}
                  />
                  <label>
                    Email address
                    <input type="text" id="email" name="email" />
                  </label>
                  <button type="submit">Đăng nhập với Email</button>
                </form>
              </div>
            );
          default:
            return (
              <div key={provider.name}>
                <button onClick={() => signIn(provider.id)}>
                  Đăng nhập với {provider.name}
                </button>
              </div>
            );
        }
      })}
    </>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

// SignIn.getInitialProps = async (context) => {
//   return {
//     providers: await providers(context),
//     csrfToken: await csrfToken(context),
//   };
// };

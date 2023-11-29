// import { ref } from "vue";
// import jwt from "jsonwebtoken";
// import { useRouter } from "vue-router";

// export default function useTokenVerifier() {
//   const error = ref(null);
//   const router = useRouter();
//   const verifyToken = () => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       router.push({ path: "/login" });
//     } else {
//       try {
//         // jwt.verify(token, "SecretFromKeyCloak");
//       } catch (err) {
//         console.log("Token is invalid or has expired.");
//         error.value = err;
//         router.push({ path: "/login" });
//       }
//     }
//   };

//   return { error, verifyToken };
// }

import { ref } from "vue";

export default function useTokenVerifier() {
  const error = ref(null);

  const verifyToken = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      return false;
    }
    return true;
    // } else {
    //   const parts = token.split(".");
    //   if (parts.length !== 3) {
    //     return false;
    //   }

    //   const header = JSON.parse(atob(parts[0]));
    //   const payload = JSON.parse(atob(parts[1]));
    //   const signature = atob(parts[2]);

    //   const parseJwt = function (token) {
    //     var base64Url = token.split(".")[1];
    //     var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    //     var jsonPayload = decodeURIComponent(
    //       window
    //         .atob(base64)
    //         .split("")
    //         .map(function (c) {
    //           return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
    //         })
    //         .join("")
    //     );

    //     return JSON.parse(jsonPayload);
    //   };

    //   const payloadFromToken = parseJwt(token);

    //   if (header.alg !== "HS256") {
    //     return false;
    //   }

    //   const now = Math.floor(Date.now() / 1000);
    //   if (payloadFromToken.exp < now) {
    //     return false;
    //   }

    //   return true;
    // }
  };

  return { error, verifyToken };
}

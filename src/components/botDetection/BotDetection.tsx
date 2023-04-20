import { useRouter } from "next/router";

import { SyntheticEvent, useState } from "react";

const BotDetection = (props) => {
  const router = useRouter();
  const [tabSelected, setTabSelected] = useState("botDetection");
  const botDetFlow =
    "https://auth.pingone.com/4e5491d5-74b6-4953-a3d1-c29f76f34d93/as/authorize?response_type=code&client_id=89de4bc4-6d8e-483d-be89-db9003109076&scope=openid%20profile%20p1%3Aread%3Auser&nonce=54321&redirect_uri=http://localhost:3000/myaccount";

  const goToBotDetectionExperience = (event: SyntheticEvent) => {
    event.preventDefault();
    window.open(botDetFlow, "_blank");
  };

  return (
    <div className="flex min-h-full w-full items-center justify-center px-1 pt-5 pb-12 sm:px-2 lg:px-5">
      <input
        type="button"
        onClick={goToBotDetectionExperience}
        value="Try Kaptcha-Me"
        className="text-pink-500 bg-slate-950 border-2 rounded-lg p-3 ring-4 ring-rose-950 border-rose-700"
      />
    </div>
  );
};

export default BotDetection;

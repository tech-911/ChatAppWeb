"use client";

// import { useRouter, useSearchParams } from "next/navigation";
// import { Button, message } from "antd";

// export default function Home() {
//   const router = useRouter();
//   const [messageApi, contextHolder] = message.useMessage();
//   const handleDashboard = () => {
//     router.push(`/dashboard`);
//     messageApi.info("Welcome to Dashboard");
//   };

//   return (
//     <main className="flex flex-col items-center w-full gap-4 pt-[20%]">
//       {contextHolder}
//       <h1 className="text-[20px] text-[#33357D] font-extrabold">Home</h1>
//       <p className="text-[#404040] text-[14px] text-center w-[30%]">
//         Welcome to Attendance Dashboard, Click the Dashbaoard Button to Proceed
//       </p>
//       <Button onClick={() => handleDashboard()} type="primary" className="">
//         Dashboard
//       </Button>
//     </main>
//   );
// }
import { useRouter, useSearchParams } from "next/navigation";
export default function Home() {
  const router = useRouter();
  const handleDashboard = () => {
    router.push(`/dashboard`);
  };

  return (
    <main className="flex flex-col items-center w-full gap-4 pt-[20%]">
      <h1 className="text-[20px] text-[#33357D] font-extrabold">Home</h1>
      <p className="text-[#404040] text-[14px] text-center w-[30%]">
        Welcome to Attendance Dashboard, Click the Dashboard Button to Proceed
      </p>
    </main>
  );
}

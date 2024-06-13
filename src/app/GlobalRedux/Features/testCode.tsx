"use client";

// import Image from "next/image";
// import { Button } from "antd";
// import type { RootState } from "../store";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   increment,
//   decrement,
//   incrementByAmount,
// } from "../Features/counter/counterSlice";
// import { useState } from "react";
// import { BsTools } from "react-icons/bs";

// export default function Home() {
//   const count = useSelector((state: RootState) => state.counter.value);
//   const dispatch = useDispatch();
//   const [add, setAdd] = useState<number>(0);
//   console.log(typeof count);

//   return (
//     <main className="flex flex-col items-center w-full gap-4">
//       <p className="text-[30px] text-green-600">{count}</p>
//       <BsTools className="text-[50px] text-[#ff0000]" />
//       <Button
//         // style={{ backgroundColor: "red" }}
//         type="default"
//         danger
//         onClick={() => dispatch(decrement())}
//       >
//         -
//       </Button>
//       <Button
//         // style={{ backgroundColor: "red" }}
//         type="primary"
//         onClick={() => dispatch(increment())}
//       >
//         +
//       </Button>
//       <div className="flex flex-row items-center gap-2">
//         <input
//           value={add}
//           onChange={(event) => setAdd(Number(event.target.value))}
//           type="text"
//           className="border border-[#000000]"
//         />
//         <Button
//           // style={{ backgroundColor: "red" }}
//           type="primary"
//           onClick={() => dispatch(incrementByAmount(add))}
//         >
//           Add
//         </Button>
//       </div>
//     </main>
//   );
// }

// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Dashboard",
//   description: "View dashboard activities",
// };

// export default function DashboardLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <div className="flex flex-col items-center w-screen h-screen bg-[#F4F4F4]">

//           {children}

//     </div>
//   );
// }

// .menu-wrapper::-webkit-scrollbar {
//   display: none;
// }
// .info-wrapper::-webkit-scrollbar {
//   width: 5px;
// }
// .header-wrapper::-webkit-scrollbar {
//   width: 5px;
// }
// .adjust-scroll::-webkit-scrollbar {
//   width: 0px;
// }

// import React from "react";
// import { DownOutlined, SmileOutlined } from "@ant-design/icons";
// import type { MenuProps } from "antd";
// import { Dropdown, Space } from "antd";

// const items: MenuProps["items"] = [
//   {
//     key: "1",
//     label: (
//       <a
//         target="_blank"
//         rel="noopener noreferrer"
//         href="https://www.antgroup.com"
//       >
//         1st menu item
//       </a>
//     ),
//   },
 
// ];

// const TestCode: React.FC = () => (
//   <Dropdown menu={{ items }}>
//     <div>tunde</div>
//   </Dropdown>
// );

// export default TestCode;

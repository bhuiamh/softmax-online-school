import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const DashboardMenu = () => {
  const router = useRouter();
  const [userPresence, setUserPresence] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const defineUser = localStorage.getItem("isUserPresent");
      setUserPresence(defineUser);
    }
  }, []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonButtonText: "Yes, log out",
      cancelButtonButtonText: "Cancel",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        if (typeof window !== "undefined") {
          localStorage.removeItem("isUserPresent");
        }
        router.push("/");
        Swal.fire({
          icon: "success",
          title: "You have successfully signed out",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      }
    });
  };
  //   async function handleAuthentication() {
  //     // Fetch data you need (replace with your actual logic)

  //     // Now check user role and redirect if needed
  //     // const userPresence = localStorage.getItem("isUserPresent");
  //     // const userPresence = "student";
  //     if (
  //       userPresence !== "admin" &&
  //       userPresence !== "instructor" &&
  //       userPresence !== "student"
  //     ) {
  //       router.push("/");
  //     }

  //     // Do something with fetchedData
  //     // ...
  //   }
  const dashboardItem = (
    <>
      <Link onClick={toggleMenu} href="/dashboard/profile">
        Profile
      </Link>
      {userPresence === "student" && (
        <Link onClick={toggleMenu} href="/dashboard/enrolled-class">
          Enrolled Classes
        </Link>
      )}
      {userPresence === "student" && (
        <Link onClick={toggleMenu} href="/dashboard/payment-history">
          Payment History
        </Link>
      )}
      {userPresence === "admin" && (
        <Link onClick={toggleMenu} href="/dashboard/manage">
          Manage User
        </Link>
      )}
      {userPresence === "admin" && (
        <Link onClick={toggleMenu} href="/dashboard/manage">
          Manage Instructor
        </Link>
      )}
      {userPresence === "admin" && (
        <Link onClick={toggleMenu} href="/dashboard/manage">
          Manage Class
        </Link>
      )}
      {userPresence === "instructor" && (
        <Link onClick={toggleMenu} href="/dashboard/manage">
          Manage Class
        </Link>
      )}
      {userPresence === "instructor" && (
        <Link onClick={toggleMenu} href="/dashboard/add-class">
          Add A Class
        </Link>
      )}
      <Link onClick={toggleMenu} href="/">
        Home
      </Link>

      <Link onClick={toggleMenu} href="/dashboard/change-password">
        Change Password
      </Link>
      <button className="text-base" onClick={handleLogOut}>
        Logout
      </button>
    </>
  );
  //   handleAuthentication();

  return <>{dashboardItem}</>;
};

export default DashboardMenu;

import ArrowNextIcon from "@/components/icons/ArrowNextIcon";
import { LeftSideMenu } from "@/constants/MENU";
import useProfileStore from "@/stores/useProfileStore";
import { helper } from "@/utils/helpers";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

const LeftSideBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { data } = useProfileStore();
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  const handleLogout = () => {
    helper.clearLocalStorage();
    window.location.href = "/";
  };
  return (
    <>
      <Box component={"ul"} sx={{ my: "35px", px: 2 }}>
        {[
          ...LeftSideMenu,
          data?.sub
            ? { label: "Logout", path: "/logout", icon: ArrowNextIcon }
            : undefined,
        ].map((item) => {
          if (!item) return null;
          return (
            <Box
              className={` cursor-pointer flex gap-2 items-center mb-5`}
              component={"li"}
              key={item.label}
              onClick={() => {
                if (item.path === "/logout") {
                  handleLogout();
                } else {
                  router.push(item.path);
                }
              }}
            >
              <item.icon
                stroke={downMd ? "var(--green-100)" : "var(--green-500)"}
                strokeWidth={pathname === item.path ? "2.3" : "1.5"}
              />
              <Typography
                sx={{
                  color: downMd ? "var(--green-100)" : "var(--green-500)",
                }}
                className={`${pathname === item.path ? "!font-extrabold" : ""}`}
              >
                {item.label}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default LeftSideBar;

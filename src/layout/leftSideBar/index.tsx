import { LeftSideMenu } from "@/constants/MENU";
import { Box, Typography } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

const LeftSideBar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      <Box component={"ul"} sx={{ my: "35px", px: 2 }}>
        {LeftSideMenu.map((item) => {
          return (
            <Box
              className={` cursor-pointer flex gap-2 items-center mb-4`}
              component={"li"}
              key={item.label}
              onClick={() => {
                router.push(item.path);
              }}
            >
              <item.icon strokeWidth={pathname === item.path ? "2.3" : '1.5'} />
              <Typography
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

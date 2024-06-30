"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useMediaQuery, useTheme } from "@mui/material";
import { useUser } from "@auth0/nextjs-auth0/client";

// import { Categories, CategoryItems, Collections, Notes } from "@prisma/client";

import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ImageList from "@mui/material/ImageList";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import ImageListItem from "@mui/material/ImageListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ImageListItemBar from "@mui/material/ImageListItemBar";

// import { useGetAllCategoryItemQuery } from "@/app/redux/services/categoryItemApiSlice";
// import { useGetUsersQuery } from "@/app/redux/services/usersApiSlice";
import CenterLoading from "@/components/CenterLoading/CenterLoading";

// interface Comments extends Notes {
//   item: string;
//   itemId: string;
//   collectionId: string;
//   categoryId: string;
//   subCategoryId: string | null;
//   subSubCategoryId: string | null;
// }

// interface CollectionsQuery extends Collections {
//   categories: CategoryQuery[];
// }

// interface CategoryQuery extends Categories {
//   items: CategoryItems[];
// }

// interface Items extends CategoryItems {
//   collectionId: string;
// }

// const getAllItems = (data: CollectionsQuery[]) => {
//   const items: Items[] = [];

//   data.forEach((element) => {
//     element.categories.forEach((category) => {
//       category.items.forEach((item) => {
//         const newItems = { ...item, collectionId: element.id };
//         items.push(newItems);
//       });
//     });
//   });

//   return items;
// };

// const getAllComments = (data: Items[]) => {
//   const comments: Comments[] = [];

//   data.forEach((element) => {
//     element.comments.forEach((comment) => {
//       const newComments = {
//         ...comment,
//         item: element.title,
//         itemId: element.id,
//         collectionId: element.collectionId,
//         categoryId: element.categoryId,
//         subCategoryId: element.subCategoryId,
//         subSubCategoryId: element.subSubCategoryId,
//       };
//       comments.push(newComments);
//     });
//   });

//   return comments;
// };

const DashboardPage = () => {
  const theme = useTheme();
  const router = useRouter();
  const { user, isLoading: loadingUser } = useUser();
  const lgSize = useMediaQuery(theme.breakpoints.down("lg"));

  // const { data, isLoading } = useGetAllCategoryItemQuery({});
  // const { data: usersQuery } = useGetUsersQuery({});

  const [lading, setLoading] = useState(true);
  //   const [items, setItems] = useState<Items[]>([]);
  //   const [comments, setComments] = useState<Comments[]>([]);

  //   useEffect(() => {
  //     if (!isLoading && data) {
  //       const items = getAllItems(data);
  //       const comments = getAllComments(items);
  //       setComments(comments);
  //       setItems(items);
  //       setLoading(false);
  //     }
  //   }, [isLoading, data]);

  return loadingUser ? (
    <CenterLoading />
  ) : (
    <Grid container justifyContent={"center"}>
      <Grid item xs={lgSize ? 12 : 10}>
        <Grid
          pt={lgSize ? 0 : 5}
          pb={10}
          height={"100%"}
          display={"flex"}
          justifyContent={"space-between"}
          flexDirection={"row"}
          sx={{
            borderRadius: "10px",
            height: "150px",
            position: "relative",
          }}
        >
          <Grid
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            height={"100%"}
          >
            <Typography fontSize={12}>
              {new Date().toLocaleDateString("en-us", {
                weekday: "long",
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </Typography>
            <Typography variant="h4">Welcome back {user?.name}!</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={lgSize ? 12 : 10}
        display={"flex"}
        flexDirection={lgSize ? "column" : "row"}
        justifyContent={"space-between"}
        pt={lgSize ? 0 : 5}
      >
        <Grid item xs={lgSize ? 12 : 9}>
          <Typography>Recently Created Items</Typography>
          <Divider sx={{ pt: 1, mb: 4 }} />

          <Grid display={"flex"} justifyContent={"space-between"}>
            <Typography textAlign={"center"} width={"100%"}>
              No Items Found
            </Typography>
          </Grid>
          <Typography sx={{ pt: 5 }}>Your Collections</Typography>
          <Divider sx={{ pt: 1, mb: 4 }} />

          <Typography textAlign={"center"} width={"100%"}>
            No Collections Found
          </Typography>
        </Grid>
        <Grid item pt={lgSize ? 4 : 0} xs={lgSize ? 12 : 2}>
          <Typography>New Comments</Typography>
          <Divider sx={{ pt: 1, mb: 2 }} />
          <Grid
            item
            display={"flex"}
            flexDirection={"column"}
            overflow={"auto"}
          ></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DashboardPage;

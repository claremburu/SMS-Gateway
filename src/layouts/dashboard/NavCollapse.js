// import React, { useState } from "react";
// import { List, ListItem, ListItemIcon, ListItemText, Collapse, Divider } from "@mui/material";

// // icons
// import ExpandLessIcon from '@mui/icons-material/ExpandLess';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// import Iconify from "../../components/Iconify";

// import navConfig from "./NavConfig";

// const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

// export default function CategoriesResults() {
//   const docs = data.links; // this coming from a json file
//   return (
//     <div>
//       <List component="nav" aria-labelledby="nested-list-subheader">
//         {docs.map((doc) => {
//           return <NavCollapse key={doc.id} doc={doc} />;
//         })}
//       </List>
//     </div>
//   );
// }

// export function NavCollapse(props) {
//   const [open, setOpen] = useState(false);

//   const handleClick = () => {
//     console.log("Handle Clicked....");
//     setOpen(!open);
//   };

//   const { doc } = props;
//   return (
//     <div>
//       <ListItem button key={doc.id} onClick={() => handleClick()}>
//         <ListItemText primary={doc.path_name} />
//         {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
//       </ListItem>
//       <Collapse
//         key={doc.values.id}
//         in={open}
//         timeout="auto"
//         unmountOnExit
//       >
//         <List component="li" disablePadding key={doc.id}>
//           {doc.values.map((value) => {
//             return (
//               <ListItem button key={value.id}>
//                 <ListItemIcon>
//                   {/* add icon here */}
//                 </ListItemIcon>
//                 <ListItemText key={value.id} primary={value.title} />
//               </ListItem>
//             );
//           })}
//         </List>
//       </Collapse>
//       <Divider />
//     </div>
//   );
// }

//   // documents: [
//   //   {
//   //     id: 1,
//   //     Name: "Category 1",
//   //     Values: [
//   //       {
//   //         id: 1,
//   //         title: "title1 ",
//   //       },
//   //       {
//   //         id: 2,
//   //         title: "title 2",
//   //       },
//   //       {
//   //         id: 3,
//   //         title: "title 3",
//   //       },
//   //     ],
//   //   },
//   //   {
//   //     id: 1,
//   //     Name: "Category 2",
//   //     Values: [
//   //       {
//   //         id: 1,
//   //         title: "title1 ",
//   //       },
//   //       {
//   //         id: 2,
//   //         title: "title 2",
//   //       },
//   //       {
//   //         id: 3,
//   //         title: "title 3",
//   //       },
//   //     ],
//   //   },
//   // ],
// };
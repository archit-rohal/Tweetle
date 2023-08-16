import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 */

export const users = [
  {
    _id: uuid(),
    firstName: "Archit",
    lastName: "Rohal",
    username: "architrohal@gmail.com",
    password: "123",
    userHandler: "archit",
    profilePic:
      "https://yesofcorsa.com/wp-content/uploads/2019/02/Johnny-Bravo-Wallpaper-For-IPhone-Free.jpg",
    link: "https://architrohal-portfolio.netlify.app/",
    bio: "Writer",
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 2,
    firstName: "Rick",
    lastName: "Sanchez",
    username: "ricksanchez@gmail.com",
    password: "ricksanchez",
    userHandler: "ricksanchez",
    profilePic: "https://starbaseatlanta.com/wp-content/uploads/rmhprs1257.jpg",
    link: "",
    bio: "",
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Morty",
    lastName: "Smith",
    username: "mortysmith@gmail.com",
    password: "mortysmith",
    userHandler: "mortysmith",
    profilePic:
      "https://static.tvtropes.org/pmwiki/pub/images/morty_smith_2.png",
    link: "",
    bio: "",
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Leroy",
    lastName: "Smith",
    username: "leroysmith@gmail.com",
    password: "leroysmith",
    userHandler: "leroysmith",
    profilePic:
      "https://cdn4.iconfinder.com/data/icons/people-avatars-2-1/345/People_Avatar-02-06-512.png",
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Bugs",
    lastName: "Bunny",
    username: "bugsbunny@gmail.com",
    profilePic:
      "https://cdn4.iconfinder.com/data/icons/people-avatars-2-1/345/People_Avatar-02-11-512.png",
    password: "bugsBunny123",
    userHandler: "bugsBunny123",
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Eric",
    lastName: "Cartman",
    username: "ericcartman@gmail.com",
    password: "ericcartman",
    profilePic:
      "https://icon-library.com/images/icon-avatars/icon-avatars-17.jpg",
    userHandler: "ericcartman",
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Bertram",
    lastName: "Gilfoyle",
    username: "bertramgilfoyle@gmail.com",
    password: "bertramgilfoyle",
    userHandler: "bertramgilfoyle",
    bookmarks: [],
    profilePic:
      "https://cdn4.iconfinder.com/data/icons/people-avatars-2-1/345/People_Avatar-02-10-512.png",
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 9,
    firstName: "Tom",
    lastName: "Cat",
    username: "tomcat@gmail.com",
    password: "tomCat123",
    userHandler: "tomCat123",
    bookmarks: [],
    followers: [],
    profilePic:
      "https://cdn4.iconfinder.com/data/icons/people-avatars-2-1/345/People_Avatar-02-14-512.png",
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];

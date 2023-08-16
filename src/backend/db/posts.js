import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 */

export const posts = [
  {
    _id: uuid(),
    content: "When in doubt, just add more cheese!",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: 2,
          firstName: "Rick",
          lastName: "Sanchez",
          username: "ricksanchez@gmail.com",
          password: "ricksanchez",
          userHandler: "ricksanchez",
          profilePic:
            "https://icon-library.com/images/icon-avatars/icon-avatars-17.jpg",
          link: "",
          bio: "",
          bookmarks: [],
          followers: [],
          following: [],
          createdAt: formatDate(2021, 6, 18, 26, 30),
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
          createdAt: formatDate(2022, 9, 12, 26, 30),
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
          createdAt: formatDate(2021, 8, 22, 26, 30),
          updatedAt: formatDate(),
        },
      ],
      dislikedBy: [],
    },
    comments: [{
      _id: uuid(),
      username: "ricksanchez@gmail.com",
      text: "Great post!",
    }],
    username: "architrohal@gmail.com",
    profilePic:
      "https://cdn4.iconfinder.com/data/icons/people-avatars-2-1/345/People_Avatar-02-06-512.png",
    userHandler: "archit",
    file:
      "https://lilluna.com/wp-content/uploads/2017/10/penne-pasta-resize-3.jpg",
    createdAt: new Date(2022, 11, 9, 11, 10, 18),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "My favorite part of the house",
    likes: {
      likeCount: 4,
      likedBy: [
        {
          _id: 2,
          firstName: "Rick",
          lastName: "Sanchez",
          username: "ricksanchez@gmail.com",
          password: "ricksanchez",
          userHandler: "ricksanchez",
          profilePic:
            "https://icon-library.com/images/icon-avatars/icon-avatars-17.jpg",
          link: "",
          bio: "",
          bookmarks: [],
          followers: [],
          following: [],
          createdAt: formatDate(2001, 5, 15, 26, 30),
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
          createdAt: formatDate(2021, 5, 12, 26, 30),
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
            "https://cdn4.iconfinder.com/data/icons/people-avatars-2-1/345/People_Avatar-02-10-512.png",
          link: "",
          bio: "",
          bookmarks: [],
          followers: [],
          following: [],
          createdAt: formatDate(2021, 5, 12, 26, 30),
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
          createdAt: formatDate(2021, 5, 25, 26, 30),
          updatedAt: formatDate(),
        },
      ],
      dislikedBy: [],
    },
    comments: [{
      _id: uuid(),
      username: "ricksanchez@gmail.com",
      text: "Great post!",
    }, {
      _id: uuid(),
      username: "leroysmith@gmail.com",
      text: "Wow!",
    }],
    username: "architrohal@gmail.com",
    profilePic:
      "https://cdn4.iconfinder.com/data/icons/people-avatars-2-1/345/People_Avatar-02-06-512.png",
    userHandler: "archit",
    file:
      "https://i.pinimg.com/originals/2d/aa/b6/2daab6b501ff611e3a0bf414c5bbde98.jpg",
    createdAt: new Date(2023, 1, 9, 11, 10, 18),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Bob turned 7 today",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: 2,
          firstName: "Rick",
          lastName: "Sanchez",
          username: "ricksanchez@gmail.com",
          password: "ricksanchez",
          userHandler: "ricksanchez",
          profilePic:
            "https://icon-library.com/images/icon-avatars/icon-avatars-17.jpg",
          link: "",
          bio: "",
          bookmarks: [],
          followers: [],
          following: [],
          createdAt: formatDate(2020, 5, 19, 26, 30),
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
            "https://cdn4.iconfinder.com/data/icons/people-avatars-2-1/345/People_Avatar-02-10-512.png",
          link: "",
          bio: "",
          bookmarks: [],
          followers: [],
          following: [],
          createdAt: formatDate(2021, 5, 5, 26, 30),
          updatedAt: formatDate(),
        },
      ],
      dislikedBy: [],
    },
    comments: [{
      _id: uuid(),
      username: "ricksanchez@gmail.com",
      text: "Great post!",
    }],
    username: "architrohal@gmail.com",
    profilePic:
      "https://cdn4.iconfinder.com/data/icons/people-avatars-2-1/345/People_Avatar-02-06-512.png",
    userHandler: "archit",
    file:
      "http://4.bp.blogspot.com/-tACQZmGbiJM/UIYL8EXnaAI/AAAAAAAAANc/t8_nKOB7qVQ/w1200-h630-p-k-no-nu/Pet+Cat.jpg",
    createdAt: new Date(2023, 5, 18, 12, 8, 15),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Best game ever",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: 2,
          firstName: "Rick",
          lastName: "Sanchez",
          username: "ricksanchez@gmail.com",
          password: "ricksanchez",
          userHandler: "ricksanchez",
          profilePic:
            "https://icon-library.com/images/icon-avatars/icon-avatars-17.jpg",
          link: "",
          bio: "",
          bookmarks: [],
          followers: [],
          following: [],
          createdAt: formatDate(),
          updatedAt: formatDate(),
        },
      ],
      dislikedBy: [],
    },
    file: "https://j.gifs.com/oQz1kY.gif",
    comments: [{
      _id: uuid(),
      username: "mortysmith@gmail.com",
      text: "Great post!",
    }],
    username: "bertramgilfoyle@gmail.com",
    profilePic:
      "https://cdn4.iconfinder.com/data/icons/people-avatars-2-1/345/People_Avatar-02-06-512.png",
    userHandler: "bertramgilfoyle",
    createdAt: new Date(2021, 5, 25, 12, 0, 0),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "It was worth the hype, err.. hike",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    file:
      "https://i.pinimg.com/originals/31/19/85/311985975231850cc793b02528c6fce9.jpg",
    comments: [{
      _id: uuid(),
      username: "mortysmith@gmail.com",
      text: "Great post!",
    }],
    username: "bugsbunny@gmail.com",
    profilePic:
      "https://cdn4.iconfinder.com/data/icons/people-avatars-2-1/345/People_Avatar-02-06-512.png",
    userHandler: "bugsBunny123",
    createdAt: formatDate(2020, 5, 16, 26, 30),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "look who came by to say Hi! ",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    file: "https://media.giphy.com/media/26gssIytJvy1b1THO/giphy.gif",
    comments: [{
      _id: uuid(),
      username: "mortysmith@gmail.com",
      text: "Great post!",
    }],
    username: "mortysmith@gmail.com",
    profilePic:
      "https://cdn4.iconfinder.com/data/icons/people-avatars-2-1/345/People_Avatar-02-06-512.png",
    userHandler: "mortysmith",
    createdAt: formatDate(2020, 5, 18, 26, 30),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Anyone seen Nemo?",
    likes: {
      likeCount: 1,
      likedBy: [{
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
        createdAt: formatDate(2021, 5, 18, 26, 30),
        updatedAt: formatDate(),
      }],
      dislikedBy: [],
    },
    comments: [{
      _id: uuid(),
      username: "leroysmith@gmail.com",
      text: "Great post!",
    }],
    username: "ricksanchez@gmail.com",
    file:
      "https://www.deeperblue.com/wp-content/uploads/2016/03/AdobeStock_62701813.jpeg",
    profilePic:
      "https://cdn4.iconfinder.com/data/icons/people-avatars-2-1/345/People_Avatar-02-06-512.png",
    userHandler: "ricksanchez",
    createdAt: formatDate(2020, 5, 12, 26, 30),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "I use Arch btw",
    likes: {
      likeCount: 1,
      likedBy: [{
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
      }],
      dislikedBy: [],
    },
    comments: [{
      _id: uuid(),
      username: "leroysmith@gmail.com",
      text: "Great post!",
    }],
    username: "mortysmith@gmail.com",
    file: "http://dotshare.it/public/images/uploads/1165.png",
    profilePic:
      "https://cdn4.iconfinder.com/data/icons/people-avatars-2-1/345/People_Avatar-02-06-512.png",
    userHandler: "mortysmith",
    createdAt: formatDate(2021, 5, 15, 26, 30),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Enjoyed the read. Highly recommend.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [{
      _id: uuid(),
      username: "leroysmith@gmail.com",
      text: "Great post!",
    }],
    username: "bugsbunny@gmail.com",
    file:
      "https://i.pinimg.com/originals/8f/17/d6/8f17d6db9fa0e4f864d3d55d554b3528.jpg",
    profilePic:
      "https://cdn4.iconfinder.com/data/icons/people-avatars-2-1/345/People_Avatar-02-06-512.png",
    userHandler: "bugsBunny123",
    createdAt: formatDate(2021, 5, 15, 26, 30),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "My PC setup💖 ",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [{
      _id: uuid(),
      username: "leroysmith@gmail.com",
      text: "Great post!",
    }],
    username: "tomcat@gmail.com",
    file:
      "https://i.pinimg.com/originals/fe/e4/2c/fee42c6410a22c526eb531ed698d54a1.png",
    profilePic:
      "https://cdn4.iconfinder.com/data/icons/people-avatars-2-1/345/People_Avatar-02-14-512.png",
    userHandler: "tomCat123",
    createdAt: new Date(2020, 5, 25, 16, 30),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Finished my first IronMan",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [{
      _id: uuid(),
      username: "bugsbunny@gmail.com",
      text: "Great post!",
    }],
    username: "leroysmith@gmail.com",
    file:
      "https://media1.tenor.com/images/6eb62d8a21f89063804dca08e6cbf8cc/tenor.gif?itemid=9960684",
    profilePic:
      "https://cdn4.iconfinder.com/data/icons/people-avatars-2-1/345/People_Avatar-02-06-512.png",
    userHandler: "leroysmith",
    createdAt: formatDate(2020, 7, 16, 26, 30),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Not all classrooms have four walls",
    likes: {
      likeCount: 2,
      likedBy: [{
        _id: uuid(),
        firstName: "Morty",
        lastName: "Smith",
        username: "mortysmith@gmail.com",
        password: "mortysmith",
        userHandler: "mortysmith",
        profilePic:
          "https://thestickerboy.com/wp-content/uploads/2019/11/morty_head_funny_rick_and_morty_sticker_5__76122.jpg",
        link: "",
        bio: "",
        bookmarks: [],
        followers: [],
        following: [],
        createdAt: formatDate(2021, 5, 15, 26, 30),
        updatedAt: formatDate(),
      }, {
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
      }],
      dislikedBy: [],
    },
    comments: [{
      _id: uuid(),
      username: "bugsbunny@gmail.com",
      text: "Great post!",
    }],
    username: "ricksanchez@gmail.com",
    file:
      "https://seasideplanet.com/wp-content/uploads/2020/03/kayaking-with-kids.jpg",
    profilePic:
      "https://cdn4.iconfinder.com/data/icons/people-avatars-2-1/345/People_Avatar-02-06-512.png",
    userHandler: "ricksanchez",
    createdAt: formatDate(2022, 5, 15, 26, 30),
    updatedAt: formatDate(),
  },
];

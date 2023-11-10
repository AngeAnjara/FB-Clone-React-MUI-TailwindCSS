import { Typography, Avatar, Box, Container, IconButton, TextField} from "@mui/material";
import { Favorite} from "@mui/icons-material";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useEffect, useState } from "react";


function Post() {
  const [user,setUser] =useState( [
    {
      id: "6511613afc13ae5665fd5606",
      first_name: "Haroun",
      last_name: "Wakenshaw",
      email: "hwakenshaw0@webmd.com",
      gender: "Male",
      isFriend: null,
      message: "Hi, How are you",
      Post: "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      like: 88,
      comment:"Hello imperdiet et, commodo vulputate, justo. In blandit ultrices enim. ",
      photo:
        "https://media.istockphoto.com/id/1282162846/fr/photo/verticale-de-jeune-femme-brune-de-cheveux-magnifiquement-regardant-rectifi%C3%A9e-dans-un.jpg?s=612x612&w=0&k=20&c=PTUYfJyKZR4TSd9in6tXBHL6PHqlM-p5U8xJDIWrv3c=",
    },
    
    {
      id: "6511613afc13ae5665fd5608",
      first_name: "Jacky",
      last_name: "Freddi",
      email: "jfreddi2@auda.org.au",
      gender: "Male",
      isFriend: null,
      message: "Hi, How are you",
      Post: "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
      like: 4,
      photo:
        "https://learn.zoner.com/wp-content/uploads/2019/02/photographing_models_in_different_environments_1_nature.jpg",
    },
    {
      id: "6511613afc13ae5665fd5609",
      first_name: "Grady",
      last_name: "Jikovsky",
      email: "gjikovsky3@go.com",
      gender: "Male",
      isFriend: null,
      comment:"Hello imperdiet et, commodo vulputate, justo. In blandit ultrices enim. ",
      Post: "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
      like: 76,
      photo:
        "https://media.flytographer.com/uploads/2023/04/photospots-outdoor-photoshoot-photographer-flytographer-7.jpeg",
    },
    {
      id: "6511613afc13ae5665fd560a",
      first_name: "Thibaud",
      last_name: "Backshaw",
      email: "tbackshaw4@epa.gov",
      gender: "Male",
      isFriend: null,
      message: "Hey,WhatsUp",
      Post: "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      like: 20,
      comment:"Hello imperdiet et, commodo vulputate, justo. In blandit ultrices enim. ",
      photo:
        "https://media.istockphoto.com/id/1382459668/fr/photo/jolie-jeune-femme-afro-au-milieu-des-palmiers.jpg?s=612x612&w=0&k=20&c=9FyPoHHCdYNWj8CWP5QJ9Lle_BMF_DebBK5iL1Py_1s=",
    },
    {
      id: "6511613afc13ae5665fd560b",
      first_name: "Cazzie",
      last_name: "Leys",
      email: "cleys5@hatena.ne.jp",
      gender: "Male",
      isFriend: false,
      Post: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      like: 39,
      photo:
        "https://media.geeksforgeeks.org/wp-content/uploads/20221122175049/DeciduousForests.jpg",
    },
    {
      id: "6511613afc13ae5665fd560c",
      first_name: "Valenka",
      last_name: "Giannazzi",
      email: "vgiannazzi6@sciencedirect.com",
      gender: "Agender",
      isFriend: true,
      message: "Take me Home",
      Post: "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
      like: 14,
      photo:
        "https://media.vogue.fr/photos/5c9b4077488cdc4843df8c05/2:3/w_2560%2Cc_limit/Capture%2520d%25E2%2580%2599e%25CC%2581cran%25202019-03-27%2520a%25CC%2580%252010.20.41.png",
    },
    {
      id: "6511613afc13ae5665fd560d",
      first_name: "Rodrique",
      last_name: "Aslin",
      email: "raslin7@theatlantic.com",
      gender: "Male",
      isFriend: false,
      message: "Hi, Where are my phone",
      Post: "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
      like: null,
      photo:
        "https://i.pinimg.com/736x/4e/a9/21/4ea9217766567275c7a7fe5fe917d4c3.jpg",
    },
    {
      id: "6511613afc13ae5665fd560e",
      first_name: "Slade",
      last_name: "de Najera",
      email: "sdenajera8@boston.com",
      gender: "Genderfluid",
      isFriend: null,
      Post: "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
      like: 78,
      photo:
        "https://i.pinimg.com/564x/ed/a2/d6/eda2d68db6ddda78cf337c7152d4910c.jpg",
    },
    {
      id: "6511613afc13ae5665fd560f",
      first_name: "Merry",
      last_name: "Brookzie",
      email: "mbrookzie9@blogtalkradio.com",
      gender: "Female",
      isFriend: true,
      Post: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
      like: 50,
      photo:
        "https://www.ukmodels.co.uk/wp-content/uploads/2016/01/shutterstock_1089487826-min.jpg",
    },
    {
      id: "6511613afc13ae5665fd5610",
      first_name: "Emmery",
      last_name: "Rimington",
      email: "erimingtona@wufoo.com",
      gender: "Male",
      isFriend: null,
      Post: "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
      like: 59,
      photo:
        "https://www.apetogentleman.com/wp-content/uploads/2018/06/male-models-noah.jpg",
    },
    {
      id: "6511613afc13ae5665fd5611",
      first_name: "Gerri",
      last_name: "Thing",
      email: "gthingb@fastcompany.com",
      gender: "Genderqueer",
      isFriend: null,
      Post: "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
      like: 7,
      photo:
        "https://i.pinimg.com/564x/4d/10/d8/4d10d8dc904b6d34251b82fb7b3f5481.jpg",
    },
    {
      id: "6511613afc13ae5665fd5612",
      first_name: "Bobbie",
      last_name: "Brierley",
      email: "bbrierleyc@telegraph.co.uk",
      gender: "Female",
      isFriend: null,
      Post: "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
      like: 63,
      photo:
        "https://i.pinimg.com/564x/eb/ea/1b/ebea1b8dda9a022823d117149e6e787b.jpg",
    },
    {
      id: "6511613afc13ae5665fd5613",
      first_name: "Anita",
      last_name: "Durrant",
      email: "adurrantd@behance.net",
      gender: "Female",
      isFriend: false,
      Post: "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
      like: 82,
      photo:
        "https://i.pinimg.com/564x/e9/fe/ed/e9feedc6f87af25b981367437014780c.jpg",
    },
    {
      id: "6511613afc13ae5665fd5614",
      first_name: "Giacobo",
      last_name: "Dowtry",
      email: "gdowtrye@redcross.org",
      gender: "Male",
      isFriend: true,
      Post: "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
      like: 35,
      photo:
        "https://i.pinimg.com/564x/e2/a9/70/e2a9706663ea8458c7d0d055d8871b50.jpg",
    },
    {
      id: "6511613afc13ae5665fd5615",
      first_name: "Imogene",
      last_name: "Cristol",
      email: "icristolf@exblog.jp",
      gender: "Female",
      isFriend: false,
      Post: "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      like: null,
      photo:
        "https://i.pinimg.com/564x/bb/9f/c9/bb9fc935bf1de40c289d5472aa8dd98e.jpg",
    },
    {
      id: "6511613afc13ae5665fd5616",
      first_name: "Onfre",
      last_name: "Grono",
      email: "ogronog@qq.com",
      gender: "Male",
      isFriend: true,
      Post: "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
      like: 32,
      photo:
        "https://i.pinimg.com/564x/3e/2e/40/3e2e4089302bddff35f90278b627cdfc.jpg",
    },
    {
      id: "6511613afc13ae5665fd5617",
      first_name: "Archibald",
      last_name: "Kierans",
      email: "akieransh@seattletimes.com",
      gender: "Male",
      isFriend: null,
      Post: "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      like: 50,
      photo:
        "https://i.pinimg.com/564x/70/db/30/70db30338ce9665fcd0e5f726b889d0f.jpg",
    },
    {
      id: "6511613afc13ae5665fd5618",
      first_name: "Shani",
      last_name: "Sydenham",
      email: "ssydenhami@wiley.com",
      gender: "Female",
      isFriend: null,
      Post: "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      like: 51,
      photo:
        "https://i.pinimg.com/564x/b8/52/e5/b852e56222fe9102457338716d780d75.jpg",
    },
    {
      id: "6511613afc13ae5665fd5619",
      first_name: "Walker",
      last_name: "Hazlegrove",
      email: "whazlegrovej@printfriendly.com",
      gender: "Genderfluid",
      isFriend: false,
      Post: "In congue. Etiam justo. Etiam pretium iaculis justo.",
      like: 80,
      photo:
        "https://i.pinimg.com/564x/c8/8c/1a/c88c1a6ac7e22b6ea8fd9491b4fa5688.jpg",
    },
    {
      id: "6511613afc13ae5665fd561a",
      first_name: "Alf",
      last_name: "Eginton",
      email: "aegintonk@google.pl",
      gender: "Male",
      isFriend: false,
      Post: "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
      like: 14,
      photo:
        "https://i.pinimg.com/564x/e7/44/c1/e744c1719555fc8871c1ef723691b22c.jpg",
    },
    {
      id: "6511613afc13ae5665fd561b",
      first_name: "Corenda",
      last_name: "Domanski",
      email: "cdomanskil@tumblr.com",
      gender: "Polygender",
      isFriend: null,
      Post: "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
      like: 7,
      photo:
        "https://i.pinimg.com/564x/2c/dd/1b/2cdd1b72e1334717eed7374a42b39889.jpg",
    },
    {
      id: "6511613afc13ae5665fd561c",
      first_name: "Gayel",
      last_name: "Legen",
      email: "glegenm@privacy.gov.au",
      gender: "Female",
      isFriend: true,
      Post: "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
      like: 1,
      photo:
        "https://i.pinimg.com/564x/d2/ab/ba/d2abbacebd30efb029a506054887ab14.jpg",
    },
    {
      id: "6511613afc13ae5665fd561d",
      first_name: "Dona",
      last_name: "Stillgoe",
      email: "dstillgoen@drupal.org",
      gender: "Female",
      isFriend: null,
      Post: "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
      like: 83,
      photo:
        "https://i.pinimg.com/564x/04/4d/4f/044d4f9ff1bdefdfe760eab366475356.jpg",
    },
    {
      id: "6511613afc13ae5665fd561e",
      first_name: "Darline",
      last_name: "Guerola",
      email: "dguerolao@com.com",
      gender: "Female",
      isFriend: true,
      Post: "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
      like: 100,
      photo:
        "https://i.pinimg.com/564x/a9/c0/d9/a9c0d92ee462e1f8a45fc553a7dce351.jpg",
    },
    {
      id: "6511613afc13ae5665fd561f",
      first_name: "Cordie",
      last_name: "Harrold",
      email: "charroldp@ftc.gov",
      gender: "Male",
      isFriend: true,
      Post: "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
      like: 97,
      photo:
        "https://i.pinimg.com/564x/e7/f0/19/e7f0197b7d323757319fcd3d2ae0fff9.jpg",
    },
    {
      id: "6511613afc13ae5665fd5620",
      first_name: "Lorrie",
      last_name: "Wingatt",
      email: "lwingattq@mit.edu",
      gender: "Male",
      isFriend: false,
      Post: "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
      like: 5,
      photo:
        "https://i.pinimg.com/564x/97/b9/20/97b920e1c95c93de9a5dc23544ad2827.jpg",
    },
    {
      id: "6511613afc13ae5665fd5621",
      first_name: "Starla",
      last_name: "Saveall",
      email: "ssaveallr@posterous.com",
      gender: "Female",
      isFriend: true,
      Post: "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
      like: 52,
      photo:
        "https://i.pinimg.com/564x/33/4c/b4/334cb4a0ea8fce4f9f79657316e52f9c.jpg",
    },
    {
      id: "6511613afc13ae5665fd5622",
      first_name: "Thurstan",
      last_name: "Fitzroy",
      email: "tfitzroys@reuters.com",
      gender: "Male",
      isFriend: null,
      Post: "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
      like: 21,
      photo:
        "https://i.pinimg.com/564x/99/12/9c/99129cf6ae3e8db350ce496d2b942fd7.jpg",
    },
    {
      id: "6511613afc13ae5665fd5623",
      first_name: "Shawn",
      last_name: "Howis",
      email: "showist@eventbrite.com",
      gender: "Female",
      isFriend: false,
      Post: "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
      like: 86,
      photo:
        "https://i.pinimg.com/564x/74/0e/6b/740e6b37a0daa41ec1e68347bafb17bd.jpg",
    },
    {
      id: "6511613afc13ae5665fd5624",
      first_name: "Tommi",
      last_name: "Cliburn",
      email: "tcliburnu@technorati.com",
      gender: "Female",
      isFriend: null,
      Post: "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
      like: 53,
      photo:
        "https://i.pinimg.com/564x/5f/fb/fa/5ffbfa22504f6db9a7a05ee29b0bcaaa.jpg",
    },
    {
      id: "6511613afc13ae5665fd5625",
      first_name: "Denny",
      last_name: "Mingardo",
      email: "dmingardov@forbes.com",
      gender: "Female",
      isFriend: null,
      Post: "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
      like: 57,
      photo:
        "https://i.pinimg.com/564x/c8/27/8b/c8278b9dbb51bc6284aacacc33143a3d.jpg",
    },
    {
      id: "6511613afc13ae5665fd5626",
      first_name: "Matias",
      last_name: "Krol",
      email: "mkrolw@hhs.gov",
      gender: "Male",
      isFriend: null,
      Post: "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
      like: 59,
      photo:
        "https://i.pinimg.com/564x/90/6d/ec/906dec638bd65f2dfe3fb697f8a2d25b.jpg",
    },
    {
      id: "6511613afc13ae5665fd5627",
      first_name: "Verena",
      last_name: "Broome",
      email: "vbroomex@bbb.org",
      gender: "Female",
      isFriend: true,
      Post: "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
      like: 32,
      photo:
        "https://i.pinimg.com/564x/28/85/31/288531d586bc1e7f8c4eea6b13a93eae.jpg",
    },
    {
      id: "6511613afc13ae5665fd5628",
      first_name: "Saunders",
      last_name: "Davenall",
      email: "sdavenally@biglobe.ne.jp",
      gender: "Male",
      isFriend: true,
      Post: "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      like: 3,
      photo:
        "https://i.pinimg.com/564x/d3/57/e7/d357e7e39b1029ed1300674958f51120.jpg",
    },
    {
      id: "6511613afc13ae5665fd5629",
      first_name: "Cordell",
      last_name: "Rosensaft",
      email: "crosensaftz@mediafire.com",
      gender: "Male",
      isFriend: null,
      Post: "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
      like: 57,
      photo:
        "https://i.pinimg.com/564x/12/16/5d/12165d78b0097c6d1aea76a1cf0e8e84.jpg",
    },
    {
      id: "6511613afc13ae5665fd562a",
      first_name: "Sydney",
      last_name: "Ritchard",
      email: "sritchard10@ehow.com",
      gender: "Female",
      isFriend: true,
      Post: "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
      like: 91,
      photo:
        "https://i.pinimg.com/564x/8f/72/0f/8f720f0f594fda81feff8792ae509f32.jpg",
    },
    {
      id: "6511613afc13ae5665fd562b",
      first_name: "Joshua",
      last_name: "Edgell",
      email: "jedgell11@rambler.ru",
      gender: "Polygender",
      isFriend: null,
      Post: "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
      like: 79,
      photo:
        "https://i.pinimg.com/564x/2f/01/27/2f01279625b75ece18248e3e88d6c93a.jpg",
    },
    {
      id: "6511613afc13ae5665fd562c",
      first_name: "Cally",
      last_name: "O'Griffin",
      email: "cogriffin12@admin.ch",
      gender: "Female",
      isFriend: true,
      Post: "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
      like: 63,
      photo:
        "https://i.pinimg.com/564x/3b/bc/b6/3bbcb6ef902556f5a0a839385e7504e0.jpg",
    },
    {
      id: "6511613afc13ae5665fd562d",
      first_name: "Sapphire",
      last_name: "Densey",
      email: "sdensey13@ed.gov",
      gender: "Female",
      isFriend: true,
      Post: "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
      like: 97,
      photo:
        "https://i.pinimg.com/750x/1c/4e/ea/1c4eea2c0392c8458f5a059c7cf573c3.jpg",
    },
  ]);
  const [isLike, setIsLike]= useState(false)
  const handleLike = (userId) => {
    setUser((prevUser) =>
      prevUser.map((user) =>
        user.id === userId
          ? { ...user, like: user.like + 1, }
          : user
      )
    );
    setIsLike(true)
  };
  const handleDislike = (userId) => {
    setUser((prevUser) =>
      prevUser.map((user) =>
        user.id === userId
          ? { ...user, like: user.like - 1 }
          : user
      )
     
    );
    setIsLike(false)
  };
  return (
    <>
      {
        user.map((item)=>{
          return <Container
          key={item.id}
          sx={{ width: "90%" }}
          className="flex-col rounded-md m-5 border-2 border-white bg-slate-50 p-4 dark:postBlack "
        >
          <Box className="flex items-center gap-2 dark:text-slate-50">
            <Avatar alt="Avatar" src={item.photo} />
            <Box>
              <Typography variant="h5">{item.first_name}</Typography>
              <Typography sx={{ fontSize: "12px" }}>4h</Typography>
            </Box>
          </Box>
          <Box className="dark:text-slate-50 m-5">
            <Typography>{item.Post}</Typography>
          </Box>
          <Box className="flex m-5 rounded-md ">
            <img src={item.photo} alt="post" />
          </Box>
          <Box sx={{ justifyContent: "space-between" }}>
            {
              isLike ? <IconButton
              className="dark:text-slate-100"
              onClick={()=>handleDislike(item.id)}
            >
              <Favorite sx={{ fontSize: 40 }} />
              {item.like}
            </IconButton> :  <IconButton
              className="dark:text-slate-100"
              onClick={()=>handleLike(item.id)}
            >
              <FavoriteBorderIcon sx={{ fontSize: 40 }} />
              {item.like}
            </IconButton>
            
            }
            <IconButton
              className="dark:text-slate-100"
              
            >
           
              <InsertCommentIcon sx={{ fontSize: 40 }} />
            </IconButton>
            <IconButton className="dark:text-slate-100">
              <ShareIcon sx={{ fontSize: 40 }} />
            </IconButton>
          </Box>
         
        </Container>
        })
      }
         
        
    </>
  );
}

export default Post;

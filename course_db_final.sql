-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2023. Ápr 28. 20:58
-- Kiszolgáló verziója: 10.4.25-MariaDB
-- PHP verzió: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `course_db`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `applied_user`
--

CREATE TABLE `applied_user` (
  `id` int(11) NOT NULL,
  `apply_date` date NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `courseId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `applied_user`
--

INSERT INTO `applied_user` (`id`, `apply_date`, `userId`, `courseId`) VALUES
(12, '2023-04-14', 3, 1),
(13, '2023-04-14', 2, 1),
(14, '2023-04-14', 2, 2),
(16, '2023-04-16', 3, 2);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `course`
--

CREATE TABLE `course` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `cphoto` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `subject` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `topic` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `details` longtext COLLATE utf8mb4_hungarian_ci NOT NULL,
  `file_url` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `deadline` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `course`
--

INSERT INTO `course` (`id`, `name`, `description`, `cphoto`, `subject`, `topic`, `details`, `file_url`, `deadline`) VALUES
(1, 'Emberi biológia és sejtszervek', 'A kurzuson az emberek szervi biológiáját tanítjuk meg.', 'https://media.istockphoto.com/id/519589014/photo/group-of-students-on-an-anatomy-class-in-high-school.jpg?s=612x612&w=0&k=20&c=N-RILZ9YegtqBeY2gaN3lvFuBFPvxjht2aDe3d0HiI0=', 'Biológia', 'Sejt szervek', 'Ut semper massa non diam condimentum, vel volutpat sem posuere. Morbi et nulla at velit dapibus efficitur quis sed leo. In porta dui nec sapien accumsan luctus. Ut suscipit sodales tincidunt. In dignissim nibh id ipsum posuere accumsan. In lacinia dapibus massa. Cras nec facilisis lectus. Duis augue justo, finibus non varius at, sodales non turpis. Donec nec orci justo. Proin pretium est vitae ipsum imperdiet tempor. Morbi convallis lectus eu risus convallis maximus. Vivamus iaculis vestibulum neque, at mollis metus sagittis sit amet. Vestibulum sed eros nec augue luctus lobortis. Maecenas faucibus rhoncus gravida.', 'https://drive.google.com/drive/folders/1Dfudxw9Pc8QjMR2PjLl1tJLZfnLXkUh5?usp=sharing', '2023.06.12'),
(2, 'Életünk az interneten', 'A kurzuson bemutatjuk hogy milyen hatással van az internet és social media a minden napi életünkre', 'https://static.scientificamerican.com/sciam/cache/file/C3D6DFBB-92DD-43D0-A9F8CB9AB477F652_source.jpg?w=590&h=800&5F47C5D2-41D8-476F-A29200DA225DCEEA', 'Információs technológia', 'Social media befolyása , információk terjedése', 'Ut semper massa non diam condimentum, vel volutpat sem posuere. Morbi et nulla at velit dapibus efficitur quis sed leo. In porta dui nec sapien accumsan luctus. Ut suscipit sodales tincidunt. In dignissim nibh id ipsum posuere accumsan. In lacinia dapibus massa. Cras nec facilisis lectus. Duis augue justo, finibus non varius at, sodales non turpis. Donec nec orci justo. Proin pretium est vitae ipsum imperdiet tempor. Morbi convallis lectus eu risus convallis maximus. Vivamus iaculis vestibulum neque, at mollis metus sagittis sit amet. Vestibulum sed eros nec augue luctus lobortis. Maecenas faucibus rhoncus gravida.', 'https://drive.google.com/drive/folders/1a_MnaL7384GA41VWQ9u9jShTztLbORW3?usp=sharing', '2023.08.12'),
(5, 'Villanyszerelés', 'A kurzus egy olyan oktatási program, amelynek során a résztvevők megismerkednek a villanyszerelői szakma alapjaival és elméleti ismereteket szereznek a különböző villanyszerelési feladatokhoz.', 'https://electriciancourses4u.co.uk/wp-content/uploads/company-video-1.jpg', 'Fizika', 'Elektronika, villanyszerelési eszközök megismerése', 'Ut semper massa non diam condimentum, vel volutpat sem posuere. Morbi et nulla at velit dapibus efficitur quis sed leo. In porta dui nec sapien accumsan luctus. Ut suscipit sodales tincidunt. In dignissim nibh id ipsum posuere accumsan. In lacinia dapibus massa. Cras nec facilisis lectus. Duis augue justo, finibus non varius at, sodales non turpis. Donec nec orci justo. Proin pretium est vitae ipsum imperdiet tempor. Morbi convallis lectus eu risus convallis maximus. Vivamus iaculis vestibulum neque, at mollis metus sagittis sit amet. Vestibulum sed eros nec augue luctus lobortis. Maecenas faucibus rhoncus gravida.', 'https://drive.google.com/drive/folders/1a_MnaL7384GA41VWQ9u9jShTztLbORW3?usp=sharing', '2023.09.03'),
(7, 'Bevezetes a Python programozasba', 'Ez a kurzus bevezeti a Python programozasi nyelvet, beleertve az alapveto programozasi fogalmakat, adatipusokat, vezerlostrukturakat es fuggvenyeket. A hallgatok kezzelfoghato tapasztalatot szereznek a Python programozasban kulonfele programozasi feladat', 'https://www.freecodecamp.org/news/content/images/2021/08/chris-ried-ieic5Tq8YMk-unsplash.jpg', 'Szamitastechnika', 'Programozas', 'Ez a kurzus kezdoknek megfelelo, akiknek nincs korabbi programozasi tapasztalata. A hallgatoknak hozzaferesre lesz szukseguk egy olyan szamitogepre, amelyen telepitve van a Python, hogy teljesitsek a programozasi feladatokat.', 'https://docs.google.com/document/d/1W-byu6UZKihB1Td5KZakXDQlA1y7BQQMe2yKrFSAkEU/edit?usp=sharing', '2023.08.01'),
(8, 'Bevezetes a pszichologiaba', 'Ez a kurzus bevezeti az emberi viselkedes es mentalis folyamatok tudomanyos tanulmanyozasanak alapjait. A targyak kozott szerepelnek a kutatasi modszerek, a neurologia, a percepcio, a tanulas, a memoria, a motivacio, az erzelem, a szemelyiseg, a szocialis', '', 'Pszichologia', 'Tarsadalom tudomanyok', 'Ez a kurzus megfelelo diakoknak, akiknek nincs elozo pszichologiai ismeretek. A hallgatoknak kotelezoen el kell olvasniuk az eloirt tankonyvfejezeteket, reszt kell venniuk online vitakon es irasbeli feladatokat kell teljesiteniuk.', 'https://drive.google.com/drive/folders/1unvwnD-iOLI05-yMbLSgqvgfEFmK799O?usp=sharing', '2023.10.12'),
(9, 'Bevezetes a digitalis marketingbe', 'Ez a kurzus bevezeti a digitalis marketinget, beleertve a keresooptimalizalast, a kozossegi media marketinget, az e-mail marketinget es a mobil marketinget. A hallgatok kezzelfoghato tapasztalatot szereznek a digitalis marketing eszkozeivel es technikaiva', 'https://www.innonic.com/wp-content/uploads/2020/02/SaaS-marketing-eszk%C3%B6z%C3%B6k.png', 'Marketing', 'Uzlet', 'Ez a kurzus hasznos lehet azoknak, akik uzleti vagy marketing teruleten szeretnenek dolgozni. A kurzus soran a hallgatok megtanulnak kampanyokat tervezni es vegrehajtani, mericskelni az eredmenyeket, es javitani az online jelenletuket. A kurzuson resztvevoknek szukseguk lesz hozzaferesre az internethez es eszkozokhoz, amelyekkel elvegezhetik a gyakorlati feladatokat.', 'https://drive.google.com/drive/folders/1hBo70tYK-7_jrCrm7_o8AbMiJEiQYkPf?usp=sharing', '2024.01.01');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `token`
--

CREATE TABLE `token` (
  `token` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `token`
--

INSERT INTO `token` (`token`, `userId`) VALUES
('a353c8b0413326aadc9813ad9e44b9791e4b792d14225c6b7398e15de7db3a71', 2);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `profile_pic` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `email`, `profile_pic`) VALUES
(1, 'Admin', '$2b$10$k2XcAqoeYSSr8av/eLw87.fwZn8w91AFj.okWhN6cmZxf3vwEQ78.', 'admin@gmail.com', 'https://ps.w.org/protect-admin-account/assets/icon-256x256.png?rev=2705477'),
(2, 'DogeStudent', '$2b$10$cmY1ub0Y6UHIsVwCSPOHJO4HK49yyzMg4ccgw2HnLfZrA7Dm9cYia', 'dogelearn@gmail.com', 'https://pbs.twimg.com/profile_images/1411596394465357824/jXPwTPfL_400x400.jpg'),
(3, 'TheUltimateStudent', '$2b$10$RuQZFHQMN19vC6l8/pC52umEPWli0B4S.L22a.iIS8lyXYxQVC6cK', 'ultimatestudent@gmai.com', 'https://ych.commishes.com/image/download/657545/');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `applied_user`
--
ALTER TABLE `applied_user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_4b58eefca06106288fcf643d038` (`userId`),
  ADD KEY `FK_3020bc11bfdd5edf285e685153d` (`courseId`);

--
-- A tábla indexei `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `token`
--
ALTER TABLE `token`
  ADD PRIMARY KEY (`token`),
  ADD KEY `FK_94f168faad896c0786646fa3d4a` (`userId`);

--
-- A tábla indexei `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `applied_user`
--
ALTER TABLE `applied_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT a táblához `course`
--
ALTER TABLE `course`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT a táblához `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `applied_user`
--
ALTER TABLE `applied_user`
  ADD CONSTRAINT `FK_3020bc11bfdd5edf285e685153d` FOREIGN KEY (`courseId`) REFERENCES `course` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_4b58eefca06106288fcf643d038` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Megkötések a táblához `token`
--
ALTER TABLE `token`
  ADD CONSTRAINT `FK_94f168faad896c0786646fa3d4a` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

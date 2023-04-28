-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2023. Ápr 28. 19:03
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
(16, '2023-04-16', 3, 2),
(17, '2023-04-17', 5, 1),
(19, '2023-04-18', 5, 5);

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
(5, 'Villanyszerelés', 'A kurzus egy olyan oktatási program, amelynek során a résztvevők megismerkednek a villanyszerelői szakma alapjaival és elméleti ismereteket szereznek a különböző villanyszerelési feladatokhoz.', 'https://electriciancourses4u.co.uk/wp-content/uploads/company-video-1.jpg', 'Fizika', 'Elektronika, villanyszerelési eszközök megismerése', 'Ut semper massa non diam condimentum, vel volutpat sem posuere. Morbi et nulla at velit dapibus efficitur quis sed leo. In porta dui nec sapien accumsan luctus. Ut suscipit sodales tincidunt. In dignissim nibh id ipsum posuere accumsan. In lacinia dapibus massa. Cras nec facilisis lectus. Duis augue justo, finibus non varius at, sodales non turpis. Donec nec orci justo. Proin pretium est vitae ipsum imperdiet tempor. Morbi convallis lectus eu risus convallis maximus. Vivamus iaculis vestibulum neque, at mollis metus sagittis sit amet. Vestibulum sed eros nec augue luctus lobortis. Maecenas faucibus rhoncus gravida.', 'https://drive.google.com/drive/folders/1a_MnaL7384GA41VWQ9u9jShTztLbORW3?usp=sharing', '2023.09.03');

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
(3, 'TheUltimateStudent', '$2b$10$RuQZFHQMN19vC6l8/pC52umEPWli0B4S.L22a.iIS8lyXYxQVC6cK', 'ultimatestudent@gmai.com', 'https://ych.commishes.com/image/download/657545/'),
(5, 'asd', '$2b$10$4/Rm4ztImPore29pOTVEIO26f31AFxlN/kJx6luY9tg17cYV7qs9W', 'asd@gmail.com', 'https://i.pinimg.com/236x/28/c5/49/28c54966142ad9b4872a6a25564f6f75.jpg');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

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
  ADD CONSTRAINT `FK_3020bc11bfdd5edf285e685153d` FOREIGN KEY (`courseId`) REFERENCES `course` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_4b58eefca06106288fcf643d038` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Megkötések a táblához `token`
--
ALTER TABLE `token`
  ADD CONSTRAINT `FK_94f168faad896c0786646fa3d4a` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

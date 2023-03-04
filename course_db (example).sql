-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2023. Már 04. 23:42
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
  `userId` int(11) DEFAULT NULL,
  `courseId` int(11) DEFAULT NULL,
  `apply_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `course`
--

CREATE TABLE `course` (
  `id` int(11) NOT NULL,
  `course_name` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `course_description` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `cover_photo` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `subject` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `topic` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `starting_date` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `course`
--

INSERT INTO `course` (`id`, `course_name`, `course_description`, `cover_photo`, `subject`, `topic`, `starting_date`) VALUES
(1, 'Általános iskolai ismeretek(4. osztály)', 'A kurzus tartalmazza az alap matematikai ismereteket, általános iskolai diákoknak', 'https://i.pinimg.com/originals/8f/54/2d/8f542db87fb0aa365e524c88ba251baf.png', 'Matematika', 'Szorzások, osztások', '2023.08.22'),
(5, 'Informatika OOP alapok', 'A kurzuson megtanítjuk az alopokat az objektum orientált programozáshoz java-ban', 'https://i.pinimg.com/736x/32/e3/6f/32e36fd1d2ad4e7a4edaaec1567cacbf.jpg', 'Informatika', 'OOP, JAVA', '2023.12.01'),
(6, 'Adatbázis kezelés', 'A kurzuson megtanítjuk az alopokat az objektum orientált programozáshoz java-ban', 'https://img.freepik.com/free-photo/online-communication_1098-15842.jpg', 'Informatika', 'MySQL', '2023.05.11'),
(7, 'Emberi Biológia', 'Magába foglalja a tananyagi kurzus a az emberi szervezet felépítését, és működését', '', 'Biológia', 'Emberi Sejtek, sejtszervezetek', '2023.07.22'),
(8, 'Kombinatorika (közép iskolai szint)', 'Az elemi kombinatorika tárgyai a(z) (ismétléses és ismétlés nélküli) permutációk, kombinációk és variációk. Képletek és feladatok megoldásait is tartalmaz', '', 'Matematika', 'Kombinatorika', '2023.09.26');

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
(1, 'kjdsfhfdjd', '$2b$10$RRlHsUsmIi7tOToxb0MHJ.V86U/HwmW24e2PW5lJEFl3sKjJSdkDm', 'kdfhshf@ugdsfuk.com', ''),
(4, 'malac', '$2b$10$YHO2NLw2HjnVZl96NC6aBu2m34GGzC3PDqe6Umhzxek4LoeutsOAm', 'malac@malac.hu', ''),
(6, 'It is second malac', '$2b$10$cZCOrU0xnD/.K4DD5WqEhOMsblojn7yGYrpVVC06/BR.fdIagcwwG', 'nemmalac@gmail.hu', ''),
(8, 'alma', '$2b$10$.bE/SwIA1tJ4AEp7Z.cmDOur7sUYNRWdsiIjyaxPvLWWXNUEHq8nS', 'alma@alma.com', ''),
(9, 'It is second malac', '$2b$10$.o0aEAA9.tBJhvhoHa7NE.MgTTisGGS86R9DTEec8sb5uotwNqdN6', 'withprofilepic@test.com', 'https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `course`
--
ALTER TABLE `course`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT a táblához `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `applied_user`
--
ALTER TABLE `applied_user`
  ADD CONSTRAINT `FK_3020bc11bfdd5edf285e685153d` FOREIGN KEY (`courseId`) REFERENCES `course` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_4b58eefca06106288fcf643d038` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

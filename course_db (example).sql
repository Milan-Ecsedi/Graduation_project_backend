-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2023. Már 04. 23:35
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
(2, 'kjdsfhfdjd', '$2b$10$ybFGgRnkyW.ETcks3CZ17u4wth34SCTCosvV516cN6swEE.3XXlTi', 'kdfhshf@ugdsfuk.com', ''),
(3, 'kjdsfhfdjd', '$2b$10$gM2gADHK9ZHoHJLRMx18DerPzh9Xu3QrMG7LF7wLJ3kxxJB8L8.SC', 'kdfhshf@ugdsfuk.com', ''),
(4, 'malac', '$2b$10$YHO2NLw2HjnVZl96NC6aBu2m34GGzC3PDqe6Umhzxek4LoeutsOAm', 'malac@malac.hu', ''),
(6, 'It is second malac', '$2b$10$cZCOrU0xnD/.K4DD5WqEhOMsblojn7yGYrpVVC06/BR.fdIagcwwG', 'nemmalac@gmail.hu', ''),
(7, 'alma', '$2b$10$YQ6nslxefzHbRU5u4014a.KbAKS.VswAIdFfhmduCzBZc2ViExBN6', 'malac@malac.com', ''),
(8, 'alma', '$2b$10$.bE/SwIA1tJ4AEp7Z.cmDOur7sUYNRWdsiIjyaxPvLWWXNUEHq8nS', 'alma@alma.com', '');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `email`) VALUES
(5, 'Noxusi Katarina', 'GarenXKata', 'katarina420@noxus.com'),
(10, 'code tester6', '$2b$10$Ro4T4qKCmAHRBPnenYbap.mqDviXY/fcqfctann5I7O1SKPVHom8a', 'example@example.com'),
(11, 'Example User', '$2b$10$i2jq62KXpZwrnuqb6Iw/POkkOtDf7C3fE3q5/tpsUj3Zqcg6ZTUTy', 'example@example.com'),
(12, 'dvajklgj', '$2b$10$cvQjLL8gR54GrsYDtcle.uArFA5OD6Xd2sOC/R2cp8DKxmR4wbZe2', 'test@user.com'),
(13, 'dvajklgj', '$2b$10$vOlnOnGv8tRyuwq6vVLMJe9TnGbUsmp2feZC6WsZHxAN4BXonAnxK', 'test@user.com'),
(14, 'dvajklgj', '', 'test@user.com'),
(15, 'dvajklgj', '', 'test@user.com'),
(16, 'dvajklgj', '', 'test@user.com'),
(17, 'FrontendUser', '$2b$10$pnGiZXm5.p.aA3dIC8f4xuKKz/DokKpm6ku5cKwoCIRRs8bSrWdua', 'frontend@gmail.com'),
(19, 'MessageTestUser', '$2b$10$YaR8oXNslkFT/fGoUDrr3Oh2O1aPY/9UeB5Otf3FqUtHQRtf90Yb2', 'example@example.com'),
(20, 'ajskdhjakj', '$2b$10$AiITEjOB6RarfKth368Rke8K7jN300r6uuwsZmzPF2BVeAQ0Mmf3O', 'asdkh@gmail.com'),
(21, 'NotAGuestUser', '$2b$10$EzzG52s2xK1//kraTL0W7eFoKOftfL.ONZj.Xo4J7O/Z1klpk2xYC', 'notaguest@gmail.com'),
(22, 'TestUserDani', '$2b$10$IRADULqD4ex/8UkcCiWSGOTqt2BPgJ5OsAsNZWZragVVN5kp4.J.u', 'dani@gmail.com');

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
-- A tábla indexei `users`
--
ALTER TABLE `users`
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT a táblához `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

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

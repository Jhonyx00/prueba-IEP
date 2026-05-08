-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 08, 2026 at 07:20 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `iep` (
  `id` int(11) NOT NULL,
  `candidato_id` int(11) NOT NULL,
  `Cm` int(11) NOT NULL,
  `Am` int(11) NOT NULL,
  `Pm` int(11) NOT NULL,
  `Im` int(11) NOT NULL,
  `Cl` int(11) NOT NULL,
  `Al` int(11) NOT NULL,
  `Pl` int(11) NOT NULL,
  `Il` int(11) NOT NULL,
  `Ct` int(11) NOT NULL,
  `At` int(11) NOT NULL,
  `Pt` int(11) NOT NULL,
  `It` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

ALTER TABLE `iep`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_candidate_iep_results` (`candidato_id`);

ALTER TABLE `iep`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

ALTER TABLE `iep`
  ADD CONSTRAINT `fk_candidate_iep_results` FOREIGN KEY (`candidato_id`) REFERENCES `candidato` (`candidato_id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: revealevent
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `artist`
--

DROP TABLE IF EXISTS `artist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `artist` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `contact_no` varchar(13) NOT NULL,
  `description` varchar(500) NOT NULL,
  `social_media1` varchar(100) DEFAULT NULL,
  `social_media2` varchar(100) DEFAULT NULL,
  `social_media3` varchar(100) DEFAULT NULL,
  `login_id` int DEFAULT NULL,
  `genre_cat_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `contact_no_UNIQUE` (`contact_no`),
  KEY `artist_fk_idx` (`login_id`),
  KEY `genre_fk_idx` (`genre_cat_id`),
  CONSTRAINT `artist_fk` FOREIGN KEY (`login_id`) REFERENCES `login` (`id`),
  CONSTRAINT `genre_fk` FOREIGN KEY (`genre_cat_id`) REFERENCES `genre_category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artist`
--

LOCK TABLES `artist` WRITE;
/*!40000 ALTER TABLE `artist` DISABLE KEYS */;
INSERT INTO `artist` VALUES (1,'zakir','khan','khan@gmail.com','8545612554','Zakir Khan is an Indian comedian, poet and actor. In 2012, he rose to popularity by winning Comedy Central, India\'s Best Stand Up Comedian competition.','Instagram:khan12','Facebook:khan75',NULL,3,2),(2,'mahesh','kale','kale@gmail.com','7845555555','Mahesh Kale is an Indian Classical vocalist renowned for his specialization in Indian Classical, Semi-Classical, Devotional music including Natya Sangeet.','Instagram:kale343','Facebook:kale909',NULL,4,4),(3,'akash','gupta','gupta@gmail.com','4565854578','Aakash Gupta is an Indian Comedian, actor, YouTuber and theatre artist. He was the co-winner of the second season of the stand-up comedy competition television series Comicstaan','Instagram:gupta212',NULL,NULL,5,2),(4,'Yohan','jrge','yohan@gmail.com','4785632135','Pune','Yo','Ha','n',8,2);
/*!40000 ALTER TABLE `artist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `contact_no` varchar(13) DEFAULT NULL,
  `birthdate` date DEFAULT NULL,
  `identity` varchar(20) DEFAULT NULL,
  `married` varchar(20) DEFAULT NULL,
  `address` varchar(300) DEFAULT NULL,
  `login_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `contact_no_UNIQUE` (`contact_no`),
  KEY `user_fk_idx` (`login_id`),
  CONSTRAINT `customer_fk` FOREIGN KEY (`login_id`) REFERENCES `login` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (1,'manish','samant','samant@gmail.com','684457956','1999-01-08','m','single','kokan',2),(6,'Sagar','Patil','patilsagar@gmail.com','78513357952','1997-08-15','m','single','Kolhapur',7);
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `event`
--

DROP TABLE IF EXISTS `event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `event` (
  `id` int NOT NULL AUTO_INCREMENT,
  `event_name` varchar(100) NOT NULL,
  `description` varchar(500) NOT NULL,
  `event_date` date NOT NULL,
  `duration` varchar(100) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `genre_cat_id` int DEFAULT NULL,
  `venue_id` int DEFAULT NULL,
  `organiser_id` int DEFAULT NULL,
  `img_landscape` longblob,
  `starttime` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fenre_cat_id_fk_idx` (`genre_cat_id`),
  KEY `venue_id_idx` (`venue_id`),
  KEY `organizer_id_fk_idx` (`organiser_id`),
  CONSTRAINT `fk_venue_id` FOREIGN KEY (`venue_id`) REFERENCES `venue` (`id`),
  CONSTRAINT `genre_cat_id_fk` FOREIGN KEY (`genre_cat_id`) REFERENCES `genre_category` (`id`),
  CONSTRAINT `organizer_id_fk` FOREIGN KEY (`organiser_id`) REFERENCES `organizer` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event`
--

LOCK TABLES `event` WRITE;
/*!40000 ALTER TABLE `event` DISABLE KEYS */;
INSERT INTO `event` VALUES (1,'zakir khan show','After a massively successful special Tathastu, Zakir Khan is on the road with his new show!','2023-08-23','2hr',500.00,2,1,2,'',NULL),(2,'mahesh kale show','singing show','2023-08-26','2hr 30min',400.00,4,3,1,NULL,NULL),(3,'michel jackon show','fake dancer','2023-09-15','2hr',400.00,3,1,1,NULL,'9:00 AM'),(4,'xx','yy','2023-04-12','1hr',400.00,2,1,1,NULL,'9:00 AM'),(5,'sagar','hikki','2023-09-15','2hr',400.00,2,1,1,NULL,'9:00 AM'),(6,'Arjun Event','Best Comedy','2023-08-31','4 hr',600.00,2,4,2,NULL,'10:00 PM');
/*!40000 ALTER TABLE `event` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `event_artist`
--

DROP TABLE IF EXISTS `event_artist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `event_artist` (
  `id` int NOT NULL AUTO_INCREMENT,
  `event_id` int DEFAULT NULL,
  `artist_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `event_id_fk_idx` (`event_id`),
  KEY `artist_id_fk_idx` (`artist_id`),
  CONSTRAINT `artist_id_fk2` FOREIGN KEY (`artist_id`) REFERENCES `artist` (`id`),
  CONSTRAINT `event_id_fk` FOREIGN KEY (`event_id`) REFERENCES `event` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event_artist`
--

LOCK TABLES `event_artist` WRITE;
/*!40000 ALTER TABLE `event_artist` DISABLE KEYS */;
INSERT INTO `event_artist` VALUES (1,1,1),(2,2,2);
/*!40000 ALTER TABLE `event_artist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genre_category`
--

DROP TABLE IF EXISTS `genre_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genre_category` (
  `id` int NOT NULL,
  `category_name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genre_category`
--

LOCK TABLES `genre_category` WRITE;
/*!40000 ALTER TABLE `genre_category` DISABLE KEYS */;
INSERT INTO `genre_category` VALUES (1,'Actor'),(2,'Comedian'),(3,'Dancer'),(4,'Singer'),(5,'Poet'),(6,'Disco jockey');
/*!40000 ALTER TABLE `genre_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `location`
--

DROP TABLE IF EXISTS `location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `location` (
  `id` int NOT NULL,
  `city_name` varchar(100) NOT NULL,
  `area_name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `location`
--

LOCK TABLES `location` WRITE;
/*!40000 ALTER TABLE `location` DISABLE KEYS */;
INSERT INTO `location` VALUES (1,'pune','kothrud'),(2,'pune','shivajinagar'),(3,'pune','swargate'),(4,'pune','shukravar peth'),(5,'pune','sadashiv peth'),(6,'pune','aundh'),(7,'pune','wanowrie'),(8,'pune','chinchwad');
/*!40000 ALTER TABLE `location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `user_type_id` int NOT NULL,
  `status` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_utid` (`user_type_id`),
  CONSTRAINT `fk_utid` FOREIGN KEY (`user_type_id`) REFERENCES `user_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
INSERT INTO `login` VALUES (1,'rohit166','Rohit@123',2,0),(2,'manish778','Manish@123',1,1),(3,'zakir123','khan@123',3,1),(4,'mahesh123','kale@123',3,1),(5,'akash123','gupta@123',3,1),(6,'mahesh222','gupta@222',2,0),(7,'Sagar@genius','Sagar@123',1,NULL),(8,'Yohan@Toper','Yohan@123',3,NULL);
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `organizer`
--

DROP TABLE IF EXISTS `organizer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `organizer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `company_name` varchar(100) NOT NULL,
  `licence_no` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `contact_no` varchar(13) NOT NULL,
  `login_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `licence_no_UNIQUE` (`licence_no`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `contact_no_UNIQUE` (`contact_no`),
  KEY `organiser_fk_idx` (`login_id`),
  CONSTRAINT `organizer_fk` FOREIGN KEY (`login_id`) REFERENCES `login` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `organizer`
--

LOCK TABLES `organizer` WRITE;
/*!40000 ALTER TABLE `organizer` DISABLE KEYS */;
INSERT INTO `organizer` VALUES (1,'Rohit Enterprises','4785s5','mehrarohit@gmail.com','8954756277',1),(2,'Mahesh Enterprises','4552154','guptamahesh@gmail.com','4758545145',6);
/*!40000 ALTER TABLE `organizer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seat`
--

DROP TABLE IF EXISTS `seat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `seat` (
  `id` int NOT NULL AUTO_INCREMENT,
  `s_row` varchar(20) NOT NULL,
  `s_column` int NOT NULL,
  `venue_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seat`
--

LOCK TABLES `seat` WRITE;
/*!40000 ALTER TABLE `seat` DISABLE KEYS */;
INSERT INTO `seat` VALUES (1,'A',1,1),(2,'A',2,1),(3,'A',3,1),(4,'A',1,3),(5,'A',2,3),(6,'A',3,3);
/*!40000 ALTER TABLE `seat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seat_booking`
--

DROP TABLE IF EXISTS `seat_booking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `seat_booking` (
  `id` int NOT NULL AUTO_INCREMENT,
  `booking_id` int DEFAULT NULL,
  `seat_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `bookin_fk_idx` (`booking_id`),
  CONSTRAINT `bookin_fk` FOREIGN KEY (`booking_id`) REFERENCES `ticket_booking` (`id`),
  CONSTRAINT `seat_fk` FOREIGN KEY (`id`) REFERENCES `seat` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seat_booking`
--

LOCK TABLES `seat_booking` WRITE;
/*!40000 ALTER TABLE `seat_booking` DISABLE KEYS */;
/*!40000 ALTER TABLE `seat_booking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ticket_booking`
--

DROP TABLE IF EXISTS `ticket_booking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ticket_booking` (
  `id` int NOT NULL AUTO_INCREMENT,
  `quantity` int NOT NULL DEFAULT '1',
  `total_amount` decimal(12,2) NOT NULL,
  `booking_date` date NOT NULL,
  `payment_method` varchar(100) NOT NULL,
  `payment_status` varchar(100) NOT NULL,
  `event_id` int DEFAULT NULL,
  `customer_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `event-id_fk3_idx` (`event_id`),
  KEY `customer_id_fk1_idx` (`customer_id`),
  CONSTRAINT `customer_id_fk1` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`),
  CONSTRAINT `event-id_fk3` FOREIGN KEY (`event_id`) REFERENCES `event` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ticket_booking`
--

LOCK TABLES `ticket_booking` WRITE;
/*!40000 ALTER TABLE `ticket_booking` DISABLE KEYS */;
/*!40000 ALTER TABLE `ticket_booking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_type`
--

DROP TABLE IF EXISTS `user_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_type` (
  `id` int NOT NULL,
  `user_type` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_type`
--

LOCK TABLES `user_type` WRITE;
/*!40000 ALTER TABLE `user_type` DISABLE KEYS */;
INSERT INTO `user_type` VALUES (1,'customer'),(2,'organizer'),(3,'artist'),(4,'admin');
/*!40000 ALTER TABLE `user_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `venue`
--

DROP TABLE IF EXISTS `venue`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `venue` (
  `id` int NOT NULL,
  `venue_name` varchar(100) NOT NULL,
  `capacity` int NOT NULL,
  `description` varchar(500) NOT NULL,
  `location_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `location_fk_idx` (`location_id`),
  CONSTRAINT `location_fk` FOREIGN KEY (`location_id`) REFERENCES `location` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `venue`
--

LOCK TABLES `venue` WRITE;
/*!40000 ALTER TABLE `venue` DISABLE KEYS */;
INSERT INTO `venue` VALUES (1,'Yashwantrao Chavan Natyagruha',120,'Yashwantrao Chavan Natyagruha in Pune is one of the leading businesses in the Is MOD Se Jaate Hai (Event). Also known for Auditoriums, Is MOD Se Jaate Hai (Event), Venue Consultants and much more. Find Address, Contact Number, Reviews & Ratings, Photos, Maps of Yashwantrao Chavan Natyagruha, Pune.',1),(2,'Nehru Memorial Hall',60,'Nehru Memorial Hall in Pune is one of the leading businesses in the Auditoriums. Also known for Auditoriums, Play, Hindi Drama Plays, English Plays, Drama Plays, English Drama Plays, Hindi Plays and much more. ',2),(3,'Pandit Bhimsen Joshi Kalamandir',50,'Established in the year 2013, Pandit Bhimsen Joshi Kalamandir in Aundh, Pune is a top player in the category Auditoriums in the Pune. This well-known establishment acts as a one-stop destination servicing customers both local and from other parts of Pune. Over the course of its journey, this business has established a firm foothold in it\'s industry.',6),(4,'Acharya Atre Rangamandir',100,'Established in the year 2002, Acharya Atre Rangamandir in Pimpri, Pune is a top player in the category Auditoriums in the Pune. This well-known establishment acts as a one-stop destination servicing customers both local and from other parts of Pune. Over the course of its journey, this business has established a firm foothold in it\'s industry.',8),(5,'laxminarayan hall',120,'Laxminarayan hall in swargate, Pune is a top player in the category hall in the Pune. This well-known establishment acts as a one-stop destination servicing customers both local and from other parts of Pune. Over the course of its journey, this business has established a firm foothold in it\'s industry.',3),(6,'mahatma phule sanskritik bhavan',100,'Established in the year 2014, Mahatma Phule Sanskrutik Bhavan in Wanowrie, Pune is a top player in the category Auditoriums in the Pune. This well-known establishment acts as a one-stop destination servicing customers both local and from other parts of Pune. Over the course of its journey, this business has established a firm foothold in it\'s industry.',7);
/*!40000 ALTER TABLE `venue` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-25 11:35:59

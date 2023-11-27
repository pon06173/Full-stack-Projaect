use mydb2;

CREATE TABLE `customer` (
  `customerID` bigint UNIQUE PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `customerName` varchar(100) NOT NULL,
  `contactName` varchar(100) NOT NULL,
  `address` varchar(100) NOT NULL,
  `city` varchar(100) NOT NULL,
  `postalCode` varchar(100) NOT NULL,
  `country` varchar(100) NOT NULL
);

CREATE TABLE `category` (
  `categoryID` bigint UNIQUE PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `categoryName` varchar(100) NOT NULL,
  `description` varchar(255) NOT NULL
);

CREATE TABLE `shipper` (
  `shipperID` bigint UNIQUE PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `shipperName` varchar(100) NOT NULL,
  `phone` varchar(100) NOT NULL
);

CREATE TABLE `employee` (
  `employeeID` bigint UNIQUE PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `lastName` varchar(100) NOT NULL,
  `firstName` varchar(100) NOT NULL,
  `birthDate` date NOT NULL,
  `photo` varchar(100) NOT NULL,
  `notes` varchar(255) NOT NULL
);

CREATE TABLE `order` (
  `orderID` bigint UNIQUE PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `customerID` bigint,
  `employeeID` bigint,
  `orderDate` datetime NOT NULL,
  `shipperID` bigint
);

CREATE TABLE `order_detail` (
  `orderDetailID` bigint UNIQUE PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `orderID` bigint,
  `productID` bigint,
  `quantity` int NOT NULL
);

CREATE TABLE `product` (
  `productID` bigint UNIQUE PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `productName` varchar(100) NOT NULL,
  `supplierID` bigint,
  `categoryID` bigint,
  `unit` varchar(100) NOT NULL,
  `price` float NOT NULL
);

CREATE TABLE `supplier` (
  `supplierID` bigint UNIQUE PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `supplierName` varchar(100) NOT NULL,
  `contactName` varchar(100) NOT NULL,
  `address` varchar(100) NOT NULL,
  `city` varchar(100) NOT NULL,
  `postalCode` varchar(100) NOT NULL,
  `country` varchar(100) NOT NULL,
  `phone` varchar(100) NOT NULL
);

ALTER TABLE `order` ADD FOREIGN KEY (`customerID`) REFERENCES `customer` (`customerID`);

ALTER TABLE `order` ADD FOREIGN KEY (`employeeID`) REFERENCES `employee` (`employeeID`);

ALTER TABLE `order` ADD FOREIGN KEY (`shipperID`) REFERENCES `shipper` (`shipperID`);

ALTER TABLE `order_detail` ADD FOREIGN KEY (`orderID`) REFERENCES `order` (`orderID`);

ALTER TABLE `order_detail` ADD FOREIGN KEY (`productID`) REFERENCES `product` (`productID`);

ALTER TABLE `product` ADD FOREIGN KEY (`supplierID`) REFERENCES `supplier` (`supplierID`);

ALTER TABLE `product` ADD FOREIGN KEY (`categoryID`) REFERENCES `category` (`categoryID`);

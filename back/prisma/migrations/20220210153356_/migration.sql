/*
  Warnings:

  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `password` VARCHAR(255) NOT NULL,
    MODIFY `name` VARCHAR(191) NULL,
    MODIFY `photo` VARCHAR(191) NULL;

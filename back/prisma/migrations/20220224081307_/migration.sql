/*
  Warnings:

  - You are about to drop the column `comment` on the `comment` table. All the data in the column will be lost.
  - Added the required column `content` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `comment` DROP COLUMN `comment`,
    ADD COLUMN `content` VARCHAR(191) NOT NULL;

/*
  Warnings:

  - You are about to drop the column `departemnt` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `departemnt`,
    ADD COLUMN `department` VARCHAR(191) NULL;

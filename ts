#!/bin/bash


for file in /mnt/rstor/CSE_BME_CCIPD/home/bxf169/KIRC/nifti/*
do
    TotalSegmentator -i $file  -o "result/$file" --preview  
done


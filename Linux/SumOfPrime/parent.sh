#!/bin/bash
# Author: Rajarajeshwari Sridharan
# Date: 16/06/2022
# Description: To pass n as argument to child.sh 
# Date Modified: 16/06/2022

file='child.sh'
if [ -f "$file" ];
then
	chmod a+x $file
	./$file 21
	./$file 17
fi

#!/bin/bash
# Author: Rajarajeshwari Sridharan
# Date: 16/06/2022
# Description: To calculate sum of prime numbers between 0 and n
# Date Modified: 16/06/2022

n=$1
sum=0
for ((i=2;i<=n;i++))
do
	flag=0
	for ((j=2;j<i;j++))
	do	
		if [ `expr $i % $j` -eq 0 ]
		then
			flag=1
			break
		fi
	done
	if [ $flag -eq 0 ]
	then
		sum=`expr $sum + $j`
	fi
done
echo "Sum of prime numbers between 0 to $n: $sum"

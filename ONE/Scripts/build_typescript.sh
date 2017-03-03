#!/bin/bash

#find `pwd` -name '*.ts' | sort -u
#find `pwd` -type f -name '*ts' ! -name '*.d.ts' | sort -u
CWD=`pwd`
echo `find $CWD -type f -name '*ts' ! -name '*.d.ts' | sort -u` > ts-files.txt
tsc @ts-files.txt
rm ts-files.txt
package main

import "strings"

func ConcatTwoStrings(str1, str2 string) string {
   return str1 + str2 
}

func ConcatWithJoin(str1,str2 string){
	_=strings.Join([]string{str1,str2},"")
}
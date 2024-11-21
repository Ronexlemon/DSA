package main

import (
	"fmt"
	"sync"
)

func calculateSum(numbers []int,result chan int, wg *sync.WaitGroup) {
	defer wg.Done()
	sum :=0
	for _,num:=range numbers{
		sum +=num
	}
	result<-sum
}

func main(){
	numbers := []int{1,2,3,4,5,5,6,6,7,8,8,3,2,2,2}
	mid := len(numbers)/2
	resultChan :=make(chan int)
	var wg sync.WaitGroup
	wg.Add(2)
	go calculateSum(numbers[:mid],resultChan,&wg)
	go calculateSum(numbers[mid:],resultChan,&wg)

	go func() {
		wg.Wait()
		close(resultChan)
	}()
	finalSum:=0
	for result := range resultChan{
		finalSum+=result
	}
	fmt.Println("Final Sum is:",finalSum)
}
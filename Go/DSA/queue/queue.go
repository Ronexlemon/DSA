package main

import "fmt"

type Queue struct{ // FIFO
	item []int
}

func (q *Queue) Enqueue(num int){
	q.item = append(q.item, num)
}

func (q *Queue) Dequeue()int{ //FIFO
	if len(q.item) == 0{
		fmt.Println("Queue is Empty")
		return -1
	}
	q.item = q.item[1:]
	return q.item[0]
}

func(q *Queue) ValuesRemaining()*Queue{
	return q
}

func main(){
	q:= Queue{}
	q.Enqueue(1)
	q.Enqueue(2)
	q.Enqueue(3)
	valuesAfterenqueue := q.ValuesRemaining()
	fmt.Println(valuesAfterenqueue.item)
	fmt.Println(q.Dequeue()) //1
	fmt.Println(q.Dequeue()) //2
	valuesAfterDequeue := q.ValuesRemaining().item
	fmt.Println(valuesAfterDequeue)

}
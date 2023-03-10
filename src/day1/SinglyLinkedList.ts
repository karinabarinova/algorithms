class Node<T> {
    value: T
    next: Node<T> | null

    constructor (value: T) {
        this.value = value;
        this.next = null;
    }
}
export default class SinglyLinkedList<T> {
    public _length: number;
    private head: Node<T> | null
    private tail: Node<T> | null



    constructor () {
        this.head = null;
        this.tail = null
    }

    get length(): number {
        if (!this.head) {
            return 0
        }

        let index = 1;
        let curNode = this.head;

        while (curNode.next) {
            curNode = curNode.next
            index++
        }
        return index
    }

    prepend(item: T): void {
        const node = new Node(item);

        if (!this.head) {
            this.head = node;
            this.tail = node
        } else {
            node.next = this.head
            this.head = node
        }

    }
    insertAt(item: T, idx: number): void {
        const newNode = new Node(item);
        if (!this.head) {
            this.head = newNode;
        }

        if (idx === 0) {
            newNode.next = this.head
            this.head = newNode
            return;
        }

        let curNode = this.head
        let curIndex = 0;
        while (curNode.next) {
            if (curIndex + 1 === idx) {
                newNode.next = curNode.next.next
                curNode.next = newNode
                return;
            }
            curNode = curNode.next;
            curIndex++
        }

    }

    append(item: T): void {
        const node = new Node(item);

        if (!this.head) {
            this.head = node;
            this.tail = node
        } else {
            this.tail!.next = node
            this.tail = node
        }


    }

    remove(item: T): T | undefined {
        if (!this.head) {
            return;
        }

        if (this.head.value === item) {
            const item = this.head.value
            this.head = this.head.next;
            return item
        }

        let curNode = this.head

        while (curNode.next) {
            if (curNode.next.value === item) {
                const item = curNode.next.value;
                curNode.next = curNode.next.next
                if (!curNode.next) {
                    this.tail = curNode
                }
                return item
            }
            curNode = curNode.next
        }

        return;
    }

    get(idx: number): T | undefined {
        let curNode = this.head;
        let curIndex = 0;

        while (curNode) {
            if (curIndex === idx) {
                return curNode.value
            }

            curNode = curNode.next
            curIndex++
        }
        return undefined;
    }

    removeAt(idx: number): T | undefined {
        if (!this.head) {
            return;
        }

        if (idx === 0) {
            let item = this.head.value
            this.head = this.head.next;
            if (this.head) {
                this.tail = null
            }
            return item
        }
        let curNode = this.head
        let curIndex = 0

        while (curNode.next) {
            if (curIndex + 1 === idx) {
                let item = curNode.next.value

                curNode.next = curNode.next.next
                if (!curNode.next) {
                    this.tail = curNode
                }
                return item;
            }
            curNode = curNode.next
            curIndex++
        }
        return;
    }
}

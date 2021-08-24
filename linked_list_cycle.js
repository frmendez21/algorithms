const hasCycle = head => {
    let fast = head;
    let slow = head;
    while(fast && fast.next) {
        slow = fast.next;
        fast = fast.next.next;
        if(slow === fast) return true;
    }
    return false
};

// have fast and slow pointer
// fast goes two steps, slow goes one each time
// 
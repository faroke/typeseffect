interface fade{
    In(element: HTMLElement, timer:number): void;
    Out(element:HTMLElement, timer:number): void;
    To(element: HTMLElement, timer: number, opacity: number): void;
    Toggle(element: HTMLElement, timer: number): void;
}
let fade: fade = {
    In(element: HTMLElement, timer: number): void {
        this.To(element, timer, 1);
    },
    Out(element: HTMLElement, timer: number): void{
        this.To(element, timer, 0);
    },
    To(element: HTMLElement, timer: number, opacity: number): void {
        element.style.opacity = `${opacity}`;
        element.style.transition = `opacity ${timer}ms`;
    },
    Toggle(element: HTMLElement, timer: number): void {
        if (window.getComputedStyle(element).getPropertyValue("opacity") == "1"){
            this.Out(element, timer);
        }
        else {
            this.In(element, timer);
        }
    }
};

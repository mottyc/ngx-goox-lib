export class ColumnDef {
    constructor(icon, name, type, format, sort, filterOp, filter) {
        if (icon !== undefined) {
            this.icon = icon;
        }
        if (name !== undefined) {
            this.name = name;
        }
        if (type !== undefined) {
            this.type = type;
        }
        if (format !== undefined) {
            this.format = format;
        }
        if (sort !== undefined) {
            this.sort = sort;
        }
        if (filterOp !== undefined) {
            this.filterOp = filterOp;
        }
        if (filter !== undefined) {
            this.filter = filter;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29sdW1uRGVmLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWdvb3gtbGliL3NyYy9saWIvQ29sdW1uRGVmLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBLE1BQU0sT0FBTyxTQUFTO0lBdUJqQixZQUFZLElBQWEsRUFBRSxJQUFhLEVBQUUsSUFBYSxFQUFFLE1BQWUsRUFBRSxJQUFhLEVBQUUsUUFBaUIsRUFBRSxNQUE4QztRQUN2SixJQUFJLElBQUksS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQUMsQ0FBQztRQUM3QyxJQUFJLElBQUksS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQUMsQ0FBQztRQUM3QyxJQUFJLElBQUksS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQUMsQ0FBQztRQUM3QyxJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQUMsQ0FBQztRQUNuRCxJQUFJLElBQUksS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQUMsQ0FBQztRQUM3QyxJQUFJLFFBQVEsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQUMsQ0FBQztRQUN6RCxJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQUMsQ0FBQztJQUN2RCxDQUFDO0NBS0oiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5cbmV4cG9ydCBjbGFzcyBDb2x1bW5EZWYge1xuIFxuICAgIC8vIENvbHVtbiBmaWVsZCBpY29uIFxuICAgIHB1YmxpYyBpY29uOiBzdHJpbmc7XG4gXG4gICAgLy8gQ29sdW1uIGZpZWxkIG5hbWUgXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiBcbiAgICAvLyBDb2x1bW4gZmllbGQgdHlwZSBcbiAgICBwdWJsaWMgdHlwZTogc3RyaW5nO1xuIFxuICAgIC8vIERpc3BsYXkgZm9ybWF0IGhpbnQgXG4gICAgcHVibGljIGZvcm1hdDogc3RyaW5nO1xuIFxuICAgIC8vIFNvcnQgb3JkZXIgMDogbm8gc29ydCwgMTogc29ydCBhc2MsIC0xIHNvcnQgZGVzYyBcbiAgICBwdWJsaWMgc29ydDogbnVtYmVyO1xuIFxuICAgIC8vIEZpbHRlciBvcGVyYW5kIFxuICAgIHB1YmxpYyBmaWx0ZXJPcDogbnVtYmVyO1xuIFxuICAgIC8vIEZpbHRlciBieSB2YWx1ZSBcbiAgICBwdWJsaWMgZmlsdGVyOiBudW1iZXIgfCBudW1iZXJbXSB8IHN0cmluZyB8IHN0cmluZ1tdO1xuIFxuICAgICBjb25zdHJ1Y3RvcihpY29uPzogc3RyaW5nLCBuYW1lPzogc3RyaW5nLCB0eXBlPzogc3RyaW5nLCBmb3JtYXQ/OiBzdHJpbmcsIHNvcnQ/OiBudW1iZXIsIGZpbHRlck9wPzogbnVtYmVyLCBmaWx0ZXI/OiBudW1iZXIgfCBudW1iZXJbXSB8IHN0cmluZyB8IHN0cmluZ1tdKSB7IFxuICAgICAgICBpZiAoaWNvbiAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuaWNvbiA9IGljb247IH1cbiAgICAgICAgaWYgKG5hbWUgIT09IHVuZGVmaW5lZCkgeyB0aGlzLm5hbWUgPSBuYW1lOyB9XG4gICAgICAgIGlmICh0eXBlICE9PSB1bmRlZmluZWQpIHsgdGhpcy50eXBlID0gdHlwZTsgfVxuICAgICAgICBpZiAoZm9ybWF0ICE9PSB1bmRlZmluZWQpIHsgdGhpcy5mb3JtYXQgPSBmb3JtYXQ7IH1cbiAgICAgICAgaWYgKHNvcnQgIT09IHVuZGVmaW5lZCkgeyB0aGlzLnNvcnQgPSBzb3J0OyB9XG4gICAgICAgIGlmIChmaWx0ZXJPcCAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuZmlsdGVyT3AgPSBmaWx0ZXJPcDsgfVxuICAgICAgICBpZiAoZmlsdGVyICE9PSB1bmRlZmluZWQpIHsgdGhpcy5maWx0ZXIgPSBmaWx0ZXI7IH1cbiAgICB9XG5cblxuIFxuXG59XG5cblxuXG5cblxuXG5cbiJdfQ==
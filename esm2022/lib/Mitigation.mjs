// Mitigation risks mitigation strategy
export class Mitigation {
    constructor(operationManagerEval, documentMitigation, mitigationStrategy, managerName, idNumber, flightNotApproved, followUpActions) {
        if (operationManagerEval !== undefined) {
            this.operationManagerEval = operationManagerEval;
        }
        if (documentMitigation !== undefined) {
            this.documentMitigation = documentMitigation;
        }
        if (mitigationStrategy !== undefined) {
            this.mitigationStrategy = mitigationStrategy;
        }
        if (managerName !== undefined) {
            this.managerName = managerName;
        }
        if (idNumber !== undefined) {
            this.idNumber = idNumber;
        }
        if (flightNotApproved !== undefined) {
            this.flightNotApproved = flightNotApproved;
        }
        if (followUpActions !== undefined) {
            this.followUpActions = followUpActions;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWl0aWdhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1nb294LWxpYi9zcmMvbGliL01pdGlnYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsdUNBQXVDO0FBQ3ZDLE1BQU0sT0FBTyxVQUFVO0lBdUJsQixZQUFZLG9CQUE4QixFQUFFLGtCQUE0QixFQUFFLGtCQUEyQixFQUFFLFdBQW9CLEVBQUUsUUFBaUIsRUFBRSxpQkFBMkIsRUFBRSxlQUF3QjtRQUNsTSxJQUFJLG9CQUFvQixLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQUMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLG9CQUFvQixDQUFDO1FBQUMsQ0FBQztRQUM3RixJQUFJLGtCQUFrQixLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDO1FBQUMsQ0FBQztRQUN2RixJQUFJLGtCQUFrQixLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDO1FBQUMsQ0FBQztRQUN2RixJQUFJLFdBQVcsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQUMsQ0FBQztRQUNsRSxJQUFJLFFBQVEsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQUMsQ0FBQztRQUN6RCxJQUFJLGlCQUFpQixLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO1FBQUMsQ0FBQztRQUNwRixJQUFJLGVBQWUsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO1FBQUMsQ0FBQztJQUNsRixDQUFDO0NBS0oiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5cbi8vIE1pdGlnYXRpb24gcmlza3MgbWl0aWdhdGlvbiBzdHJhdGVneVxuZXhwb3J0IGNsYXNzIE1pdGlnYXRpb24ge1xuIFxuICAgIC8vIE9wZXJhdGlvbnMgTWFuYWdlciBldmFsdWF0aW9uIFxuICAgIHB1YmxpYyBvcGVyYXRpb25NYW5hZ2VyRXZhbDogYm9vbGVhbjtcbiBcbiAgICAvLyBEb2N1bWVudCBtaXRpZ2F0aW9uIFxuICAgIHB1YmxpYyBkb2N1bWVudE1pdGlnYXRpb246IGJvb2xlYW47XG4gXG4gICAgLy8gTWl0aWdhdGlvbiBzdHJhdGVnaWVzIC0gUmlzayBBc3Nlc3NtZW50IFRvb2wgXG4gICAgcHVibGljIG1pdGlnYXRpb25TdHJhdGVneTogc3RyaW5nO1xuIFxuICAgIC8vIE1hbmFnZXIgbmFtZSBcbiAgICBwdWJsaWMgbWFuYWdlck5hbWU6IHN0cmluZztcbiBcbiAgICAvLyBNYW5hZ2VyIElEIG51bWJlciBcbiAgICBwdWJsaWMgaWROdW1iZXI6IHN0cmluZztcbiBcbiAgICAvLyBGbGlnaHQgY2Fubm90IGJlIGNvbmR1Y3RlZCB1bmRlciBub3RlZCBjb25kaXRpb25zIFxuICAgIHB1YmxpYyBmbGlnaHROb3RBcHByb3ZlZDogYm9vbGVhbjtcbiBcbiAgICAvLyBNaXRpZ2F0aW9uIGZvbGxvd3VwIGFjdGlvbnMgXG4gICAgcHVibGljIGZvbGxvd1VwQWN0aW9uczogc3RyaW5nO1xuIFxuICAgICBjb25zdHJ1Y3RvcihvcGVyYXRpb25NYW5hZ2VyRXZhbD86IGJvb2xlYW4sIGRvY3VtZW50TWl0aWdhdGlvbj86IGJvb2xlYW4sIG1pdGlnYXRpb25TdHJhdGVneT86IHN0cmluZywgbWFuYWdlck5hbWU/OiBzdHJpbmcsIGlkTnVtYmVyPzogc3RyaW5nLCBmbGlnaHROb3RBcHByb3ZlZD86IGJvb2xlYW4sIGZvbGxvd1VwQWN0aW9ucz86IHN0cmluZykgeyBcbiAgICAgICAgaWYgKG9wZXJhdGlvbk1hbmFnZXJFdmFsICE9PSB1bmRlZmluZWQpIHsgdGhpcy5vcGVyYXRpb25NYW5hZ2VyRXZhbCA9IG9wZXJhdGlvbk1hbmFnZXJFdmFsOyB9XG4gICAgICAgIGlmIChkb2N1bWVudE1pdGlnYXRpb24gIT09IHVuZGVmaW5lZCkgeyB0aGlzLmRvY3VtZW50TWl0aWdhdGlvbiA9IGRvY3VtZW50TWl0aWdhdGlvbjsgfVxuICAgICAgICBpZiAobWl0aWdhdGlvblN0cmF0ZWd5ICE9PSB1bmRlZmluZWQpIHsgdGhpcy5taXRpZ2F0aW9uU3RyYXRlZ3kgPSBtaXRpZ2F0aW9uU3RyYXRlZ3k7IH1cbiAgICAgICAgaWYgKG1hbmFnZXJOYW1lICE9PSB1bmRlZmluZWQpIHsgdGhpcy5tYW5hZ2VyTmFtZSA9IG1hbmFnZXJOYW1lOyB9XG4gICAgICAgIGlmIChpZE51bWJlciAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuaWROdW1iZXIgPSBpZE51bWJlcjsgfVxuICAgICAgICBpZiAoZmxpZ2h0Tm90QXBwcm92ZWQgIT09IHVuZGVmaW5lZCkgeyB0aGlzLmZsaWdodE5vdEFwcHJvdmVkID0gZmxpZ2h0Tm90QXBwcm92ZWQ7IH1cbiAgICAgICAgaWYgKGZvbGxvd1VwQWN0aW9ucyAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuZm9sbG93VXBBY3Rpb25zID0gZm9sbG93VXBBY3Rpb25zOyB9XG4gICAgfVxuXG5cbiBcblxufVxuXG5cblxuXG5cblxuXG4iXX0=
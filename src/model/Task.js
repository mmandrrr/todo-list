export class Task {

    constructor(title, description) {
        this.title = title,
        this.description = description,
        this.id = Math.random(),
        this.status = false
    }
}
export default class Movie {
  constructor(data) {
    this.id = data[`id`];
    this.info = data[`film_info`];
    this.userDetails = data[`user_details`];
    this.comments = data[`comments`];
    // this.title = this.info[`title`];
    // this.description = data[`description`] || ``;
    // this.dueDate = data[`due_date`] ? new Date(data[`due_date`]) : null;
    // this.tags = new Set(data[`tags`] || []);
    // this.repeatingDays = data[`repeating_days`];
    // this.color = data[`color`];
    // this.isFavorite = Boolean(this.userDetails[`favorite`]);
    // this.isArchive = Boolean(data[`is_archived`]);
  }

  toRAW() {
    return {
      // 'id': this.id,
      // 'description': this.description,
      // 'due_date': this.dueDate ? this.dueDate.toISOString() : null,
      // 'tags': Array.from(this.tags),
      // 'repeating_days': this.repeatingDays,
      // 'color': this.color,
      // 'is_favorite': this.isFavorite,
      // 'is_archived': this.isArchive,
    };
  }

  static parseData(data) {
    return new Movie(data);
  }

  static parseDataArray(array) {
    return array.map(Movie.parseData);
  }

  static clone(data) {
    return new Movie(data.toRAW());
  }
}


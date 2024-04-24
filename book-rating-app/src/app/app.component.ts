import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  index = 0;
  userRating = 0;
  sumRating = 0;
  ratingCount = 0;
  avgRating = 0;
  isInputDisabled = true;
  bookArray = [
    {
      name: 'To Kill a Mockingbird',
      description:
        'A novel set in the American South during the 1930s that deals with issues of racial injustice and moral growth.',
      author: 'Harper Lee',
    },
    {
      name: '1984',
      description:
        'A dystopian novel set in a totalitarian society, exploring themes of surveillance, propaganda, and government oppression.',
      author: 'George Orwell',
    },
    {
      name: 'The Catcher in the Rye',
      description:
        'A coming-of-age novel narrated by a teenager named Holden Caulfield, who struggles with alienation and identity.',
      author: 'J.D. Salinger',
    },
    {
      name: 'The Great Gatsby',
      description:
        'A novel set in the Jazz Age (1920s) in Long Island and New York City, focusing on the American Dream and the obsession with wealth and status.',
      author: 'F. Scott Fitzgerald',
    },
    {
      name: 'Pride and Prejudice',
      description:
        'A romantic novel set in early 19th-century England, revolving around the themes of love, marriage, and social status.',
      author: 'Jane Austen',
    },
    {
      name: 'Moby-Dick',
      description:
        "A novel by Herman Melville that follows the narrator's obsessive quest for revenge on a white whale named Moby Dick, which destroyed his ship and severed his leg.",
      author: 'Herman Melville',
    },
    {
      name: 'The Hobbit',
      description:
        'A fantasy novel by J.R.R. Tolkien, following the journey of Bilbo Baggins, a hobbit who embarks on an adventure to reclaim treasure guarded by the dragon Smaug.',
      author: 'J.R.R. Tolkien',
    },
  ];

  getCurrentRating(rating: number) {
    this.userRating = rating;
    this.isInputDisabled = false;
  }

  calcAvgRating(rating: number) {
    this.userRating = 0;
    this.isInputDisabled = true;
    this.index++;
    if (this.index == this.bookArray.length) {
      this.index = 0;
      this.avgRating = 0;
      return;
    }
    this.sumRating += rating;
    this.ratingCount++;
    this.avgRating = this.sumRating / this.ratingCount;
  }
}

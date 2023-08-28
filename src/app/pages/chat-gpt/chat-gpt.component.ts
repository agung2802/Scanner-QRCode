import { Component } from '@angular/core';
import { ChatbotService } from 'src/app/service/chatBot/chatbot.service';

@Component({
  selector: 'app-chat-gpt',
  templateUrl: './chat-gpt.component.html',
  styleUrls: ['./chat-gpt.component.scss']
})
export class ChatGptComponent {

  messages: { role: string; content: string }[] = [];
  userInput = '';

  constructor(private chatService: ChatbotService) {
    this.messages.push({ role: 'system', content: 'Welcome to the chatbot!' });
  }

  inputChange(event: any){
    this.userInput = event.target.value;
    console.log(this.userInput);
    
  }

  sendMessage() {
    if (this.userInput.trim() === '') return;

    this.messages.push({ role: 'user', content: this.userInput });
    this.userInput = '';

    this.chatService.sendMessage(this.messages[this.messages.length - 1].content).subscribe(
      (response: any) => {
        const botResponse = response.choices[0].message.content;
        this.messages.push({ role: 'bot', content: botResponse });
      },
      error => {
        console.error(error);
      }
    );
  }
}

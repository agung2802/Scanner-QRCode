import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import create from "chatgpt-api";

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  private apiUrl = 'https://api.openai.com/v1/chat/completions';
  private apiKey = 'API Key'; // Ganti dengan API key Anda

  constructor(private http: HttpClient) {}

  sendMessage(message: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`
    });

    const data = {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'system', content: 'You are a chatbot.' }, { role: 'user', content: message }]
    };

    return this.http.post(this.apiUrl, data, { headers });
  }
}

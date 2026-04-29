import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

  // Students
  getStudents() {
    return this.http.get(`${this.baseUrl}/students`, {
    headers: {
      'Cache-Control': 'no-cache'
    }
  });
  }

  addStudent(data: any) {
    return this.http.post(`${this.baseUrl}/students`, data);
  }
  deleteStudent(id: string) {
  return this.http.delete(`${this.baseUrl}/students/${id}`);

}
  getStudentById(id: string) {
    return this.http.get(`${this.baseUrl}/students/${id}`);
  } 
  updateStudent(id: any, data: any) {
    return this.http.put(`${this.baseUrl}/students/${id}`, data);
  }


  // Fees
  addFee(data: any) {
    return this.http.post(`${this.baseUrl}/fees`, data);
  }

  getFees(studentId: string) {
    return this.http.get(`${this.baseUrl}/fees/${studentId}`);
  }

  // Admission
  submitAdmission(data: any) {
    return this.http.post(`${this.baseUrl}/admission`, data);
  }
}
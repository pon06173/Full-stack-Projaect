package org.comstudy.websocket;

import java.io.IOException;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

import org.springframework.stereotype.Service;

import jakarta.websocket.OnClose;
import jakarta.websocket.OnError;
import jakarta.websocket.OnMessage;
import jakarta.websocket.OnOpen;
import jakarta.websocket.Session;
import jakarta.websocket.server.ServerEndpoint;

@Service
@ServerEndpoint(value = "/broadSocket")
public class BroadSocket {
   
   static Set<Session> clientSessionSet = Collections.synchronizedSet(new HashSet<>());
   
   @OnOpen
   public void onOpen(Session session) {
      System.out.println("소켓 서버 열림.");
      clientSessionSet.add(session); //Client에서 받은 세션을 추가한다
   }
   
   @OnClose
   public void onClose() {
      System.out.println("소켓 서버 닫힘.");
   }
   
   @OnMessage
   public void onMessage(String message, Session session) throws IOException {
      System.out.println("받은 메세지: " + message);
      // 메세지가 브라우저로 반환 된다.
      // return "reply:" + message;
      
      synchronized (clientSessionSet) {
         for (Session clientSession : clientSessionSet) {
            if(!session.equals(clientSession)) { //client 세션이 같지 않다면
               clientSession.getBasicRemote().sendText(message);
            }
         }
      }
   }
   
   @OnError
   public void onError(Throwable th) {
      th.printStackTrace();
   }
}
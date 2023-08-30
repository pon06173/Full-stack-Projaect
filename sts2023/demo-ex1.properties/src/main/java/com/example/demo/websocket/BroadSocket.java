package com.example.demo.websocket;

import java.util.Collections;
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
	public void onOpen() {
		System.out.println("소켓 서버가 오픈 되었습니다...");
		clientSessionSet.add(session);
	}
	
	@OnClose
	public void onClose() {
		System.out.println("소켓 서버가 닫혔습니다...");
	}
	
	@OnMessage
	public String onMessage(String message, Session session) {
		System.out.println("받은 메세지 : " + message);
		// 메세지가 브라우저로 반환 된다.
		//return "reply " + message;
		
		synchronized (clientSessionSet) {
			for (Session clientSession : clientSessionSet) {
				if(!session.equals(clientSession)) {
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
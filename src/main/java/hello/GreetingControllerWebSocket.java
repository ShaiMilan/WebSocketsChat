package hello;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

/**
 * Created by shaim on 29/01/2018.
 */

@Controller
public class GreetingControllerWebSocket {
	private static final Logger log = LoggerFactory.getLogger(GreetingControllerWebSocket.class);

	@Autowired
	private SimpMessagingTemplate simpMessagingTemplate;

	@Autowired
	public GreetingControllerWebSocket(SimpMessagingTemplate simpMessagingTemplate) {
		this.simpMessagingTemplate = simpMessagingTemplate;
	}

	@MessageMapping("/hello")
	@SendTo("/topic/greetings")
	public void greeting(HelloMessage message) throws Exception {
		//Thread.sleep(1000); // simulated delay
		log.info("Recieved message " + message.toString());
		simpMessagingTemplate.convertAndSend("/topic/greetings", new Greeting(String.format("Date: %s | User: %s | Message: %s ", message.getDate(), message.getName(), message.getMessage())));
		//return new Greeting("Hello, " + message.getName() + "!");
	}
}

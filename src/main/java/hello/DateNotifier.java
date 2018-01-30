package hello;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by shaim on 29/01/2018.
 */
@Service
public class DateNotifier {
	private static final SimpleDateFormat dateFormat = new SimpleDateFormat("HH:mm:ss");

	private static final Logger log = LoggerFactory.getLogger(DateNotifier.class);

	@Autowired
	private SimpMessagingTemplate simpMessagingTemplate;

	@Autowired
	public DateNotifier(SimpMessagingTemplate simpMessagingTemplate) {
		this.simpMessagingTemplate = simpMessagingTemplate;
	}

	/*@Scheduled(fixedRate = 5000)*/
	public void reportCurrentTime() {
		log.info("just a log");
		simpMessagingTemplate.convertAndSendToUser("/topic/greetings", new Greeting(String.format("The time is now %s", dateFormat.format(new Date()))));

	}

}

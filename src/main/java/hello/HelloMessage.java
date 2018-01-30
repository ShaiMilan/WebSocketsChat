package hello;

/**
 * Created by shaim on 29/01/2018.
 */
public class HelloMessage {
	private String name;
	private String message;
	private String date;

	public HelloMessage() {
	}

	public HelloMessage(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		final StringBuilder sb = new StringBuilder("HelloMessage{");
		sb.append("date='").append(date).append('\'');
		sb.append(", name='").append(name).append('\'');
		sb.append(", message='").append(message).append('\'');
		sb.append('}');
		return sb.toString();
	}
}

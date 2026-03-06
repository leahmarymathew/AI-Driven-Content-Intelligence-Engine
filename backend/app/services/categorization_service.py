def categorize_content(title, content):

    text = (title + " " + content).lower()

    if "security" in text or "cyber" in text:
        return "Cybersecurity"

    if "ai" in text or "machine learning" in text:
        return "Artificial Intelligence"

    if "cloud" in text:
        return "Cloud Computing"

    return "General"
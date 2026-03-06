def detect_audience(content):

    text = content.lower()

    if "developer" in text or "code" in text:
        return "Developers"

    if "business" in text or "market" in text:
        return "Business"

    return "General Audience"
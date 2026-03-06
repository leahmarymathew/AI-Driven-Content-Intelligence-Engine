def build_content_prompt(topic, audience, tone):

    prompt = f"""
You are an AI content engine.

Generate structured content for the following:

Topic: {topic}
Audience: {audience}
Tone: {tone}

Return the output in JSON format with the following fields:

title
summary
content
keywords
category

Ensure the JSON is valid.
"""

    return prompt
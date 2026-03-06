import json
from app.ai_engine.prompt_templates import build_content_prompt
from app.ai_engine.llm_client import generate_text


def generate_content(topic, audience, tone):

    prompt = build_content_prompt(topic, audience, tone)

    result = generate_text(prompt)

    try:
        parsed = json.loads(result)
    except:
        parsed = {
            "title": topic,
            "summary": "",
            "content": result,
            "keywords": [],
            "category": "General"
        }

    return parsed
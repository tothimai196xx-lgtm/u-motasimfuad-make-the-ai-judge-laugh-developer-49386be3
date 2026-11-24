# The Button Twice

[![make.fun](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3)
[![Rank](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3/tothimai196xx-lgtm/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3/rank.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3)
[![Reward](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3/tothimai196xx-lgtm/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3/reward.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3)

Entry for the [make.fun](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3) bounty **Make the AI Judge Laugh: Developer Excuses**.

## The entry

> The deploy didn't break anything — that bug's been live since March, it just needed one customer stubborn enough to click the button twice, and of course he did it at 3 a.m.

One funny single-line excuse a developer gives when code breaks in production. The twist: the deploy is innocent — the bug was already live for months, it just needed one stubborn customer to finally meet it. At 3 a.m., of course.

## How it works

`main.ts` writes the excuse to `/output/entry.txt` (173 characters, one line, UTF-8) and validates the 1–200 character gate before writing.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).

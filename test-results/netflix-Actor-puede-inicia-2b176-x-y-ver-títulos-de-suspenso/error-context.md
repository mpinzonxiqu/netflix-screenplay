# Page snapshot

```yaml
- banner:
  - link "Netflix":
    - /url: /
- heading "Sign In" [level=1]
- text: Email or mobile number
- textbox "Email or mobile number": TU_CORREO
- text: Password
- textbox "Password": TU_CONTRASEÑA
- button "Hide Password"
- button "Sign In"
- paragraph: OR
- button "Use a Sign-In Code"
- link "Forgot password?":
  - /url: /loginhelp
- checkbox "Remember me" [checked]
- text: Remember me New to Netflix?
- link "Sign up now.":
  - /url: /
- paragraph: This page is protected by Google reCAPTCHA to ensure you're not a bot.
- link "Learn more.":
  - paragraph: Learn more.
- contentinfo:
  - text: Questions? Call
  - link "01 800 917 1563 (Toll-Free)":
    - /url: tel:01 800 917 1563
  - list:
    - listitem:
      - link "FAQ":
        - /url: https://help.netflix.com/support/412
    - listitem:
      - link "Help Center":
        - /url: https://help.netflix.com
    - listitem:
      - link "Terms of Use":
        - /url: https://help.netflix.com/legal/termsofuse
    - listitem:
      - link "Privacy":
        - /url: https://help.netflix.com/legal/privacy
    - listitem:
      - link "Cookie Preferences":
        - /url: "#"
    - listitem:
      - link "Corporate Information":
        - /url: https://help.netflix.com/legal/corpinfo
  - text: Select language
  - combobox "Select language":
    - option "Español"
    - option "English" [selected]
```
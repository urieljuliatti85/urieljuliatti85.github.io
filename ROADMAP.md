# Pick Up Your Epic! — Roadmap

## Status Legend

- [ ] Not started
- [~] In progress
- [x] Completed
- [!] Blocked

---

# Phase 0 — Project Analysis

- [ ] Inspect existing repository
- [ ] Check Ruby version
- [ ] Check Rails version
- [ ] Check PostgreSQL configuration
- [ ] Inspect Gemfile
- [ ] Inspect existing models
- [ ] Inspect existing controllers
- [ ] Inspect routes
- [ ] Inspect tests
- [ ] Identify existing functionality
- [ ] Identify technical risks

---

# Phase 1 — Foundation

- [ ] Confirm Rails configuration
- [ ] Confirm PostgreSQL
- [ ] Configure Tailwind
- [ ] Configure Hotwire
- [ ] Configure testing
- [ ] Configure development environment
- [ ] Create initial application layout
- [ ] Create landing page

### Verification

- [ ] Application boots
- [ ] Database connects
- [ ] Tests pass

---

# Phase 2 — Authentication

## User

- [ ] Create User
- [ ] Add authentication flow

## SpotifyAccount

- [ ] Create SpotifyAccount
- [ ] Implement Spotify OAuth
- [ ] Handle callback
- [ ] Handle logout
- [ ] Secure token storage

### Verification

- [ ] User can authenticate with Spotify
- [ ] Existing user can log in
- [ ] New user is created
- [ ] Tokens are not exposed
- [ ] Tests pass

---

# Phase 3 — Tracks

- [ ] Create Track
- [ ] Add spotify_id
- [ ] Add metadata
- [ ] Add unique constraint
- [ ] Implement Spotify search
- [ ] Implement search UI
- [ ] Implement Track page

### Verification

- [ ] Search works
- [ ] Track metadata is displayed
- [ ] Duplicate Spotify tracks are prevented
- [ ] Tests pass

---

# Phase 4 — Epic

- [ ] Create Epic model
- [ ] Create migration
- [ ] Add validations
- [ ] Add database constraints
- [ ] Create Epic UI
- [ ] Select start time
- [ ] Select end time
- [ ] Preview selected segment
- [ ] Save Epic
- [ ] Display Epic
- [ ] Play Epic where supported

### Verification

- [ ] Valid Epic can be created
- [ ] Invalid timestamps are rejected
- [ ] Epic belongs to correct user
- [ ] Epic belongs to correct Track
- [ ] Tests pass

---

# Phase 5 — Pick

- [ ] Create Pick model
- [ ] Add unique constraint
- [ ] Pick Epic
- [ ] Unpick Epic if required by approved scope
- [ ] Display Pick count
- [ ] Display users who Picked where appropriate

### Verification

- [ ] User can Pick an Epic
- [ ] Duplicate Pick is prevented
- [ ] Epic ownership remains unchanged
- [ ] Tests pass

---

# Phase 6 — Collections

- [ ] Create Collection
- [ ] Create CollectionEpic
- [ ] Add Epic
- [ ] Remove Epic
- [ ] Order Epics
- [ ] Public/private visibility
- [ ] Play Collection

### Verification

- [ ] Collection can be created
- [ ] Epic can be added
- [ ] Duplicate Epic is prevented
- [ ] Private Collections remain private
- [ ] Tests pass

---

# Phase 7 — Profiles

- [ ] Public profile
- [ ] User's Epics
- [ ] User's Collections
- [ ] Picked Epics
- [ ] Play user's Epics

### Verification

- [ ] Public profile is accessible
- [ ] Private content is protected
- [ ] Tests pass

---

# Phase 8 — Discover

- [ ] Discover page
- [ ] Public Epics
- [ ] Trending Epics
- [ ] Simple ranking
- [ ] Play Epic
- [ ] Pick Epic

### Verification

- [ ] Only public content appears
- [ ] Trending ordering works
- [ ] Pick works from Discover
- [ ] Tests pass

---

# Phase 9 — MVP Validation

- [ ] Complete end-to-end flow
- [ ] Spotify login
- [ ] Search Track
- [ ] Create Epic
- [ ] Discover Epic
- [ ] Pick Epic
- [ ] Add Epic to Collection
- [ ] Play Collection
- [ ] Review security
- [ ] Review database indexes
- [ ] Review performance
- [ ] Run complete test suite

---

# MVP Complete

The MVP is considered complete when the complete
core flow works:

Spotify
→ Track
→ Epic
→ Discover
→ Pick
→ Collection
→ Play